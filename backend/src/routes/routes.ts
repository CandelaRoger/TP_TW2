import { Router } from "express";
import productoRouter from "./producto-router/producto.router.js";
import carritoRouter from "./producto-router/carrito.router.js";
import usuarioRouter from "./usuario-router/usuario.router.js";
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
        router.use(
            "/api/usuario",
             usuarioRouter
        );

        return router;
    }
}