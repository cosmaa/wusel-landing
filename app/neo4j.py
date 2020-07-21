import os
from json import dumps
from flask import g, Response, request

from neo4j import GraphDatabase, basic_auth

from app import app

url = os.getenv("NEO4J_URL")
password = os.getenv("NEO4J_PASSWORD")


driver = GraphDatabase.driver(url, auth=basic_auth("neo4j", password), encrypted=False)


def get_db():
    if not hasattr(g, 'neo4j_db'):
        g.neo4j_db = driver.session()
    return g.neo4j_db


@app.teardown_appcontext
def close_db(error):
    if hasattr(g, 'neo4j_db'):
        g.neo4j_db.close()


def serialize_movie(movie):
    return {
        'id': movie['id'],
        'title': movie['title'],
        'summary': movie['summary'],
        'released': movie['released'],
        'duration': movie['duration'],
        'rated': movie['rated'],
        'tagline': movie['tagline']
    }


def serialize_cast(cast):
    return {
        'name': cast[0],
        'job': cast[1],
        'role': cast[2]
    }


@app.route("/api/graph")
def get_graph():
    db = get_db()
    results = db.run("MATCH (m:Movie)<-[:ACTED_IN]-(a:Person) "
                     "RETURN m.title as movie, collect(a.name) as cast "
                     "LIMIT $limit", {"limit": request.args.get("limit", 10)})
    nodes = []
    rels = []
    i = 0
    for record in results:
        nodes.append({"id": i, "name": record["movie"], "label": "movie", "_color": 'orange'})
        target = i
        i += 1
        for name in record['cast']:
            actor = {"id": i, "name": name, "label": "actor", "_color": 'blue'}
            try:
                source = nodes.index(actor)
            except ValueError:
                nodes.append(actor)
                source = i
                i += 1
            rels.append({"sid": source, "tid": target})
    return Response(dumps({"nodes": nodes, "links": rels}),
                    mimetype="application/json")


@app.route("/api/search")
def get_search():
    try:
        q = request.args["q"]
    except KeyError:
        return []
    else:
        db = get_db()
        results = db.run("MATCH (movie:Movie) "
                         "WHERE movie.title =~ $title "
                         "RETURN movie", {"title": "(?i).*" + q + ".*"}
                         )
        return Response(dumps([serialize_movie(record['movie']) for record in results]),
                        mimetype="application/json")


@app.route("/api/movie/<title>")
def get_movie(title):
    db = get_db()
    results = db.run("MATCH (movie:Movie {title:$title}) "
                     "OPTIONAL MATCH (movie)<-[r]-(person:Person) "
                     "RETURN movie.title as title,"
                     "collect([person.name, "
                     "         head(split(toLower(type(r)), '_')), r.roles]) as cast "
                     "LIMIT 1", {"title": title})

    result = results.single();
    return Response(dumps({"title": result['title'],
                           "cast": [serialize_cast(member)
                                    for member in result['cast']]}),
                    mimetype="application/json")
