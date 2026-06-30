import express from "express";
import cors from "cors";
import { AppRoutes } from "./routes/routes.js"; 

const app = express();

app.use(cors());
app.use(express.json());


//chequeamos q la pticioes del front llegeuen al back 
app.use((req, res, next) => {
  console.log(`[Backend] ${req.method} ${req.url} - petición recibida`);
  next();
});
// Vinculamos las rutas del backend
app.use(AppRoutes.routes); 

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});