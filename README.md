# Fullstack Template

This is a fullstack template!

## Why a template?
During a hackathon, having the frontend communicate with the backend can be cumbersome, especially with CORS errors. This is a simple solution to that! All you need to do it clone this GitHub repository and run the program!

## How does this work?
With projects with multiple parts, using docker is often beneficial.

To run this program, you simply need to make sure you have docker installed on your system and run:
```
docker-compose up -d
```

## Adding more parts
Often in projects, databases are useful! You can update the `docker-compose.yml` file to add a database (e.g. redis, postgresql). This will pull in the image from the docker registry and run it on a specific port. You can use your database in your program from there!
