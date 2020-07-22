FROM python:3

MAINTAINER stani

WORKDIR /wusel_landing
# We copy just the requirements.txt first to leverage Docker cache
COPY ./requirements.txt /wusel_landing/requirements.txt

RUN pip install --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt


COPY . /wusel_landing

EXPOSE 5000

ENTRYPOINT ["python"]

CMD [ "app.py" ]