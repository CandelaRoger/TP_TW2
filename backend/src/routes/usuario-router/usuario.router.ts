import { Router } from "express";
import { UsuarioController } from "../../controllers/usuario.controller.js";

const router = Router();

const controller = new UsuarioController();

router.post("/registro", controller.registrar);

router.post("/login", controller.login);

export default router;