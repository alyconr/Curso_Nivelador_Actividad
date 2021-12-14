# WORKSHOP ACTIVIDAD CURSO NIVELADOR 

Bienvenidos, este es un workshop  doonde se evidencia el manejo de herramientas como Git, GitHub y Docker.

La actividad consiste en : 

1. [Instalar un IDE como Visual Studio Code](#1-instalar-un-IDE-como-visual-Studio-Code)
2. [Crear una API sencilla con Nodejs que haga que cowsay muestre el mensaje que desee el alumno a través de una petición post o get, se debe instalar  lirerías express y cowsay.](#2-Crear-una-API-sencilla-con-Nodejs-que-haga-que-cowsay-muestre-el-mensaje-que-desee-el-alumno-a-través-de-una-petición-post-o-get,-se-debe-instalar-librerías-express-y-cowsay) 
3. [Crear un perfil de GitHub.](#3-crear-un-perfil-de-github) 
4. [Crear un repo personal en GitHub para que aparezca como perfil público.](#4-crear-un-repo-personal-en-GitHub-para-que-aparezca-como-perfil-público)
5. [Subir a un repo público de GitHub el repositorio creado en el ejercicio 2 acompañado de un simple README.md que contenga una breve descripción e instrucciones para poder usar el código en otra máquina](#5-Subir-a-un-repo-público-de-GitHub-el-repositorio-creado-en-el-ejercicio-2-acompañado-de-un-simple-README.md-que contenga-una-breve-descripción-e-instrucciones-para-poder-usar-el-código-en-otra-máquina)
6. Dockerizar el código creado en el ejercicio 2. 
7. Realizar un nuevo commit al repositorio de GitHub con los cambios realizados. Añadir al README.md una sección explicando cómo hacer uso de la solución dockerizada. 

## 1. Instalación Visual Studio Code

   Descargamos visual studio code y seguimos los pasos de instalación  [aqui](https://code.visualstudio.com/Download/)
   
   
## 2. Creación de API Rest

#### 2.1 Instalación de Módulos

    Instalamos los módulos de NPM que vamos a utilizar para ellos ejecutamos:

```bash
npm install -save express
npm install -save body-parser
npm install lodash
npm install cowsay
npm install axios
npm install request
``` 
Ya en este punto tendremos un archivo package.json así:

```bash

{
  "name": "proj1",
  "version": "1.0.0",
  "description": "fist app",
  "main": "cosway.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "alyconr",
  "license": "ISC",
  "dependencies": {
    "axios": "^0.24.0",
    "cowsay": "^1.2.0",
    "express": "^4.17.1",
    "lodash": "^4.17.21",
    "request": "^2.88.2"
  }
}
```

Levantamos el servidor usando Nodejs y Express para lo cual creamos el archivo cosway.js directamente sobre la raiz del proyecto, quedando de esta manera:

```bash
var http = require('http')
var cowsay = require('cowsay')
var express = require('express')
var app = express()
//const cowsay = require('cowsay')

app.get('/cowsay', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/txt');
  res.end(
    cowsay.say({
    text: "Welcome to cowsay Home!",
    e: "oO",
    T: "U "
              })
          );

        });
 
app.get ('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/txt');
  res.end(
    cowsay.say({
    text: "This is the Module's one Activity!",
    e: "oO",
    T: "U "
               })
        );
          });
http.createServer(app).listen(8001, () => {
console.log('Server started at http://localhost:8001');
});
```
 Con las anteriores lineas  creamos el servidor capaz de servir peticiones web mediante API REST
 
 ## 3.  Perfil Github
 
 Creamos nuestro perfil Github Público en Github: [PERFIL](https://github.com/alyconr)
 
 ## 4.  Repo Personal
  Creamos nuestro repo personal para el workshop del Master: [REPO](https://github.com/alyconr/curso-nivelador-Full-Stack.git)
  
 ## 5.  Instrucciones para Utilizar el Código  en Otra máquina
  
  Para poder utilizar el código de la aplicación inicialmente  puedes crear un repo en tu maquina local mediante los siguiente comandos:
  
  ```bash
  mkdir repolocal/
  cd repolocal/
  git init
  ```
  Puedes realizar la configuiración local de tu repo:
  
  ```bash
  git config --local user.name alyconr
  git config --local user.email alyconr@gmail.com
  ```
  Luego puedes adherir las carpetas o archivos que se encuentrasn en el área "untracked" :
  ```bash
  git add repolocal/
  ```
  Realizas el commit del directorio:
  ```bash
  git commit -m "repolocal/ es adherido" 
  ```
  
  luego agregas el repo remoto en tu maquina local:
  
  ```bash 
  git remote add origin https://github.com/alyconr/curso-nivelador-Full-Stack.git
  ```
  
  Insertas los cambios en el repositorio remoto:
  
  ```bash
  git push -u origin alydev
  ```
  Para poder trabajar de manera colaborativa en este repo debes ser agregado mediante tu usuario GitHub de lo contrario solo podrás clonar el repo mediante:
  
  ```bash
  git clone https://github.com/alyconr/curso-nivelador-Full-Stack.git 
  ```
  
  ## 6. DOCKERIZAR LA SOLUCIÓN
   
   Creamos el archivo Dockerfile:
   
   ```bash
   FROM node:14
WORKDIR /usr/src/app
COPY package*.json cosway.js ./
RUN npm install
EXPOSE 8001
CMD ["node" , "cosway.js"]
```

Luego de esto creamos una carpeta dentro de nuestro repo:

```bash
mkdir DockerCowsay/
``
Creamos un .dockerignore agregando las dependencias contenidad en node_modules para finalmente cosntruir la imagen:

``bash
docker buid -t dockercowsay .
```
Finalmente corremos nuestro contenedor:

```bash
docker run -d -p 8001:8001 dockercosway
```
Aqui podemos ver la imágen corriendo en Docker Desktop:
![Imágen corriendo en Docker Desktop](https://i.imgur.com/uGRkmmS.jpg)



 

  

 
 



 
      

       

