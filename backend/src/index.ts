import express from "express";
import cors from "cors";
import { AppRoutes } from "./routes/routes.js"; 

const app = express();

app.use(cors());
app.use(express.json());


app.use((req, res, next) => {
  
  next();
});

app.use(AppRoutes.routes); 

const PORT = 3000;

app.listen(PORT, () => {
  
});