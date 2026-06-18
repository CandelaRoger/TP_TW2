import { Router } from "express";
import { ProductoController } from "../../controllers/producto.controller.js";

const router = Router();

const controller = new ProductoController();

router.get(
    "/",
    controller.getProductos
);

router.post(
    "/",
    controller.createProducto
);

export default router;