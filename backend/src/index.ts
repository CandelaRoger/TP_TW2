import express from "express";
import cors from "cors";
import { AppRoutes } from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(AppRoutes.routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});