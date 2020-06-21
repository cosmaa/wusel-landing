
#### install for local using an virtualenvironment 

```
virtualenv -p python3 venv
source venv/bin/activate
pip install -r requirements.txt
```

run the server
```
flask run
```



docker build or run (3000 port 5000 exported port)
```
docker build . -t wusel-landing
docker run -d -p 3000:5000 wusel-landing
```
