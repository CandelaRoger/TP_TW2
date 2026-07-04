import { Router } from "express";
import { CarritoController } from "../../controllers/carrito.controller.js";
import { requireUsuario } from "../../middlewares/auth.middleware.js"; // <-- NUEVO

const router = Router();

const controller = new CarritoController();


router.use(requireUsuario); 

router.post(
    "/",
    controller.agregarProducto
);


router.get(
    "/",
    controller.verCarrito
);


router.post(
    "/confirmar",
    controller.confirmarPedido
);


router.put(
    "/:itemId",
    controller.actualizarCantidad
);


router.delete(
    "/:itemId",
    controller.eliminarProducto
);

export default router;