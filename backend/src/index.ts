import express from "express";
import cors from "cors";
import { AppRoutes } from "./routes/routes.js"; 

const app = express();

app.use(cors());
app.use(express.json());

// Vinculamos las rutas del backend
app.use(AppRoutes.routes); 

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});