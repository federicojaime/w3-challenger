# App - W3 IT SOLUTIONS

### Aplicación web desarrollada para cumplimentar el desafio técnico de la empresa [W3 IT SOLITIONS](https://w3itsolutions.net/) que consiste en:

<div style="color: orange; font-style: italic;">
<p>Realizar el front de la aplicación en React (preferentemente con el NextJS – No es excluyente) para poder realizar la prueba del servicio donde se debe tener un campo de búsqueda tipo input y un botón para buscar.</p>
<p>Si el servicio retorna resultados debe mostrarse en una grilla, caso contrario debe mostrar un mensaje de “No se encontraron resultados”.</p>
<p>La grilla debe contener como columnas toda la información recibida del servicio.</p>
</div>

## Configurar variables de entorno

Si se decide generar un contendeor docker del front o generar un entorno de desarrollo local es necesario previemente crear y configurar en la carpeta raíz (w3-front) un archivo .env (varibles de entorno) [hay un archivo de ejemplo denominado .env.example]

| Variable     | Descripción | Ejemplo |
| ----------- | ----------- | -------- |
| VITE_API_URL | ip (url) y puerto en la cual se encuentra escuchando el servicio | http://localhost:3001/api

## Métodos de ejecución

* [Docker compose](../README.md) <span style="color: green; font-weight: bold;">recomandado!</span>
* [Docker (solo front)](#link1)
* [Entorno de desarrollo local](#link2)

___

<div id="link1"></div>

### Docker (solo front)

**Requerimientos previos**

* Instalar y tener en ejecución [Docker](https://www.docker.com/).
* El servicio [w3-back](../w3-back/README.md) debe estar en funcionamiento.

**Ejecutar los siguiente comandos dentro del directorio raíz [w3-front]:**

```
docker build . -t app-w3:latest
docker container run -d --name app-w3 --env-file .env -p 3000:3000 app-w3:latest
```
___

<div id="link2"></div>

### Entorno de desarrollo local

**Requerimientos previos**

* Instalar [Node](https://nodejs.org/en) [versión 20 o superior].
* El servicio [w3-back](../w3-back/README.md) debe estar en funcionamiento.

**Ejecutar los siguiente comandos dentro del directorio raíz [w3-front]:**

```
npm install
npm run dev
```
(Ver package.json para más opciones)

___

Links útiles:

* [App (React)](http://localhost:3000)