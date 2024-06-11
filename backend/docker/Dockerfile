FROM python:3.8-slim-buster

WORKDIR /api

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .
COPY .env .env

CMD ["flask", "run", "--host=0.0.0.0"]
