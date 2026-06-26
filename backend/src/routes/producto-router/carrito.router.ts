import { Router } from "express";
import { CarritoController } from "../../controllers/carrito.controller.js";

const router = Router();

const controller = new CarritoController();

// llama a front para crear un carrito nuevo, no se si deberia mostrar iniciar sesion si no sta logeado y demaas o en done va 
router.post(
    "/",
    controller.crearCarrito
);

// ver total y pedidos
router.get(
    "/:carritoId",
    controller.obtenerCarrito
);

//agregar
router.post(
    "/:carritoId/items",
    controller.agregarItem
);

// actualizamos stock 
router.put(
    "/:carritoId/items/:itemId",
    controller.actualizarItem
);

//borramos
router.delete(
    "/:carritoId/items/:itemId",
    controller.eliminarItem
);

// vacia
router.delete(
    "/:carritoId",
    controller.vaciarCarrito
);

//confirmar o finalizarr
router.post(
    "/:carritoId/finalizar",
    controller.finalizarPedido
);

export default router;