import { Router } from "express";
import { CarritoController } from "../../controllers/carrito.controller.js";

const router = Router();

const controller = new CarritoController();

// agregar 
router.post(
    "/",
    controller.agregarProducto
);

// ver el carrito 
router.get(
    "/",
    controller.verCarrito
);

// confirmar
router.post(
    "/confirmar",
    controller.confirmarPedido
);

export default router;