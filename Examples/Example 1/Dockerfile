# Use an official base image from the Docker Hub

FROM openjdk

# Set the working directory inside the container

WORKDIR /app

# Copy files from the host machine to the container

COPY . .

# Install dependencies or run commands

RUN javac HelloWorld.java

# Specify a command to run when the container starts

CMD ["java","HelloWorld"]