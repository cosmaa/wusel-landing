FROM ubuntu:16.04

MAINTAINER stani

RUN apt-get update -y && \
    apt-get install -y python-pip python-dev

# We copy just the requirements.txt first to leverage Docker cache
COPY ./requirements.txt /wusel_landing/requirements.txt

WORKDIR /wusel_landing

RUN pip install -r requirements.txt

COPY . /wusel_landing
ENTRYPOINT ["python"]

CMD [ "app.py" ]