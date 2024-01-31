# Api - W3 IT SOLUTIONS

### Servicio desarrollado para completar el desafio técnico de la empresa [W3 IT SOLITIONS](https://w3itsolutions.net/) que consiste en:

<div style="color: orange; font-style: italic;">
<p>Desarrollar 1 servicio de tipo GET que reciba un parámetro en el querystring con un valor y retorna un listado con los primeros 5 países que contengan en el nombre el valor enviado donde el valor debe ser mayor o igual a 3 caracteres, en caso contrario debe retornar un código 204.</p>

<p>Realizar el front de la aplicación en React (preferentemente con el NextJS – No es excluyente) para poder realizar la prueba del servicio donde se debe tener un campo de búsqueda tipo input y un botón para buscar. Si el servicio retorna resultados debe mostrarse en una grilla, caso contrario debe mostrar un mensaje de “No se encontraron resultados”. La grilla debe contener como columnas toda la información recibida del servicio.</p>
</div>

### Recomiendo testear el servicio y la aplicación por medio de docker compose.

Ejecutar el siguiente comando dentro del directorio raíz (requiere tener instalado y en ejecución [Docker](https://www.docker.com/)):

```
docker compose up -d --no-deps --build
```

Links útiles (posterior a ejecución del comando y generación de contenedores):

* [App (React)](http://localhost:3000)
* [Api (Node)](http://localhost:3001/api/docs) (documentación -> Swagger)
* [PhpMyAdmin](http://localhost:8080) (Solo con fines prácticos)