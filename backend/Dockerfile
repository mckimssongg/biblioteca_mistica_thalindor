FROM python:3.8-slim-buster

WORKDIR /api

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

CMD [ "python", "run.py" ]