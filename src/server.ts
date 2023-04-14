import express from "npm:express";
import "./config/db.ts";
import lights from "./routes/lights.routes.ts";

// Inicialización de servidor
const app = express();

// Configuración básica de API
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importación de rutas
app.use(lights);

export default app;
