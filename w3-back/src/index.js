import express from "express";
import { PORT } from "./config.js";
import cors from "cors";

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./data/openapi.json" assert { type: "json" };

// Rutas
import rPaises from "./routes/r_paises.js";

const app = express();

// Settings
app.set("API_PORT", process.env.PORT || 3001);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
	origin: "*",
	methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"]
}));

const base = "/api";

app.get(`${base}/`, (req, res) => {
	res.send("Bienvenido a 🚀 Api - W3 IT SOLUTIONS");
});

app.use(base, rPaises);

app.use(`${base}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
	console.log(`🚀 Api - W3 IT SOLUTIONS escuchando en el puerto: ${PORT}`);
});