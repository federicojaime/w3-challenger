import { query } from "../db/db.js";

export const getPaisesByNamePart = async (req, res) => {
	var data = null;
	var code = 400;

	if(req.query.nombre) {
		if(req.query.nombre.length > 2) {
			try {
				let sqlPaises = `
					SELECT
						p.pais,
						p.poblacion,
						(SELECT ((p.poblacion * 100) / SUM(x.poblacion)) FROM paises x) AS porcentaje
					FROM paises p
					WHERE
						p.pais LIKE ?
					LIMIT 0, 4;
				`;
				let paises = await query(sqlPaises, [`%${req.query.nombre}%`]);
				data = paises ?  paises : [];
				code = data.length > 0 ? 200 : 204;
			} catch(error) {
				console.log(error.message);
			}
		} else {
			console.log("El valor nombre debe contener al menos 3 caracteres");
		}
	} else {
		console.log("No se proporcionó un querystring válido [Ej: https://host/api/paises?nombre=Argentina]");
	}

	/*
		Acá no entiendo bien, la documentación indica:

		"Desarrollar 1 servicio de tipo GET que reciba un parámetro en el querystring con un valor y retorna un
		listado con los primeros 5 países que contengan en el nombre el valor enviado donde el valor debe ser
		mayor o igual a 3 caracteres, en caso contrario debe retornar un código 204."

		El código 204 corresponde a "No Content" o sea que no hay contenido, dicho de otra forma no hay error pero no hay registros que cumplan la condición
		lo cual es diferente a "faltan los parámetros solicitados o los parámetros solicitados no cumplen las condiciones necesarias, ej no se especifica el "querystring" nombre o nombre
		tiene menos de 3 caracteres en cuyo caso no sería mejor devolver un 400? (Bad Request)

		Además cabe destacar que generalmente cuando la respuesta es 204 se tiende a no mostrar body (ej postman no muestra el body aún si se envía)
	*/

	if(data) {
		res.status(code).json(data);
		return;
	}
	res.status(code).send(null);
};