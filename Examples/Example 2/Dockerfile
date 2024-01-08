FROM gcc
WORKDIR /app
ADD HelloWorld.zip .
RUN unzip HelloWorld.zip && gcc HelloWorld.c
CMD ["./a.out"]
