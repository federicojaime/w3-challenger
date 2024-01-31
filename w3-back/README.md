# Api - W3 IT SOLUTIONS

### Servicio desarrollado para completar el desafio técnico de la empresa [W3 IT SOLITIONS](https://w3itsolutions.net/) que consiste en:

<div style="color: orange; font-style: italic;">
<p>Desarrollar 1 servicio de tipo GET que reciba un parámetro en el querystring con un valor y retorna un listado con los primeros 5 países que contengan en el nombre el valor enviado donde el valor debe ser mayor o igual a 3 caracteres, en caso contrario debe retornar un código 204.</p>
</div>

## Configurar variables de entorno

Si se decide generar un contendeor docker del back o generar un entorno de desarrollo local es necesario previemente crear y configurar en la carpeta raíz (w3-back) un archivo .env (varibles de entorno) [hay un archivo de ejemplo denominado .env.example]

| Variable     | Descripción | Ejemplo |
| ----------- | ----------- | -------- |
| PORT | Puerto de escucha del servicio | 3001 |
| MYSQL_HOST | Host del motor mysql | localhost |
| MYSQL_PORT | Puerto del motor mysql | 3306 |
| MYSQL_USER | Usuario con acceso a la db y tabla [paises] | root |
| MYSQL_PASS | Contraseña del usuario | |
| MYSQL_DATABASE | Nombre de la base de datos | w3 |

## Métodos de ejecución

* [Docker compose](../README.md) <span style="color: green; font-weight: bold;">recomandado!</span>
* [Docker (solo back)](#link1)
* [Entorno de desarrollo local](#link2)

___

<div id="link1"></div>

### Docker (solo back)

**Requerimientos previos**

* Instalar y tener en ejecución [Docker](https://www.docker.com/).
* La base de datos [MySQL] debe estar creada con la correspondiente tabla paises y sus datos iniciales. [más información [aquí](../w3-back/data/DB.md)]

**Ejecutar los siguiente comandos dentro del directorio raíz [w3-back]:**

```
docker build . -t api-w3:latest
docker container run -d --name api-w3 --env-file .env -p 3001:3001 api-w3:latest
```
___

<div id="link2"></div>

### Entorno de desarrollo local

**Requerimientos previos**

* Instalar [Node](https://nodejs.org/en) [versión 20 o superior].
* La base de datos [MySQL] debe estar creada con la correspondiente tabla paises y sus datos iniciales.

**Ejecutar los siguiente comandos dentro del directorio raíz [w3-back]:**

```
npm install
npm run dev
```
(Ver package.json para más opciones)

___

Links útiles:

* [Api (Node)](http://localhost:3001/api/docs)