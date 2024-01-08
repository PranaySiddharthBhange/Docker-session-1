FROM alpine:latest

ENV NAME=pranay

WORKDIR /app

COPY script.sh .

RUN chmod +x script.sh

ENTRYPOINT ["./script.sh"]
