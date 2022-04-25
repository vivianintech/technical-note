# DOCKER TUTORIAL

## General concepts & commands

- Dockerfile: is for building your image

- How to build or create an image: docker build --tag hello-world .

  - --tag: name a tag in the ‘name:tag’ format.
  - In this case, hello-world is our image. Note: image name is different from the image itself. In this case, hello-world is an image. And its name is something else, example “crazy_ptolemy”
  - This image will have tag name ‘default’
  - The dot after hello-world is telling build an image in the current repository

- docker images : List docker images

- docker run hello-world : Run an image

- docker ps : To see what is running on your system

- run: docker ps -a : If you don’t see anything running

- docker start crazy_ptolemy : Start docker

- Note: difference btw docker start & docker run

  - Start: start any stopped container or image
  - Run: combination of create and start as it creates a new container and starts it immediately

- docker run -p 8080:80 --name hello -d : Map port 8080 on local machine to port 80 inside the container

  - run in detached mode or run in the background: -d
  - --name hello: give the image a name called hello. Remember, an image itself is different from its name

- docker stop hello : stop a running image

- docker logs hello: to see the logs of the image

- docker logs --help

- docker rm hello : to remove a container or an image

---

Push container into docker hub

- Create remote docker repository

- Tag our image to the newly created remote repository: docker tag hello-world pmckee/hello-world

  - hello-world: is our image
  - pmckee/hello-world: is our remote repository

- docker images: you will see we have both our local image and the tagged remote image

- docker push pmckee/hello-world: to push to remote image

---

Pull remote container

- docker rmi pmckee/hello-world: to remove the image

- docker pull pmckee/hello-world

---

If you have multiple application that you need to run, you have a database you need to run alongside with your application => can use `docker compose` for compose a lot of files together

- docker-compose up -d : to run the image

- docker-compose down : to stop the image
