
#### install for local 
todo --> virtual environment

```
pip install -r requirements.txt
```

run the server
```
flask run
```

docker build and run (exported port 5000 --> port 3000 )
```
docker build . -t wusel-landing
docker run -d -p 3000:5000 wusel-landing
```
