import { Router } from "express";
import productoRouter from "./producto-router/producto.router.js";
import carritoRouter from "./carrito-router/carrito.router.js";

export class AppRoutes {

    static get routes(): Router {

        const router = Router();

        router.use(
            "/api/datos",
            productoRouter
        );

        router.use(
            "/api/carrito",
            carritoRouter
        );

        return router;
    }
}