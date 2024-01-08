FROM gcc
WORKDIR /app
ADD https://firebasestorage.googleapis.com/v0/b/near-me-4ce94.appspot.com/o/HelloWorld.c?alt=media&token=0820b369-3a99-4752-8a15-701dbd000d5c .
RUN gcc HelloWorld.c
CMD ["./a.out"]