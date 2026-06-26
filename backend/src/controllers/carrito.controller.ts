import { Request, Response } from "express";
import { CarritoRepository } from "../repository/carrito.repository.js";
import { CarritoService, HttpError } from "../services/carrito.service.js";


const repository = new CarritoRepository();
const service = new CarritoService(repository);

function manejarError(error: unknown, res: Response) {
    if (error instanceof HttpError) {
        console.error("[Controller] Error controlado:", error.status, error.message);
        return res.status(error.status).json({ error: error.message });
    }

    console.error("[Controller] Error interno:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
}

export class CarritoController {

    // POST /api/carrito  -> crea un carrito nuevo y devuelve su id
    public crearCarrito = async (
        req: Request,
        res: Response
    ) => {
        console.log("[Controller] POST /api/carrito - petición recibida");
        try {
            const carrito = await service.crearCarrito();
            console.log("[Controller] POST /api/carrito - carrito creado:", carrito);
            res.status(201).json(carrito);
        } catch (error) {
            manejarError(error, res);
        }
    }

    // GET /api/carrito/:carritoId  -> ver el pedido (items + total)
    public obtenerCarrito = async (
        req: Request,
        res: Response
    ) => {
        const carritoId = Number(req.params.carritoId);
        console.log("[Controller] GET /api/carrito/:carritoId - id:", carritoId);
        try {
            const carrito = await service.obtenerCarrito(carritoId);
            console.log("[Controller] GET /api/carrito/:carritoId - respuesta:", carrito);
            res.status(200).json(carrito);
        } catch (error) {
            manejarError(error, res);
        }
    }

    // POST /api/carrito/:carritoId/items  -> agregar producto al carrito
    public agregarItem = async (
        req: Request,
        res: Response
    ) => {
        const carritoId = Number(req.params.carritoId);
        const { productoId, cantidad } = req.body;
        console.log("[Controller] POST /api/carrito/:carritoId/items - carritoId:", carritoId, "body:", req.body);
        try {
            const carrito = await service.agregarItem(carritoId, Number(productoId), cantidad ? Number(cantidad) : 1);
            console.log("[Controller] POST /api/carrito/:carritoId/items - carrito actualizado:", carrito);
            res.status(201).json(carrito);
        } catch (error) {
            manejarError(error, res);
        }
    }

    // PUT /api/carrito/:carritoId/items/:itemId  -> actualizar cantidad de un item
    public actualizarItem = async (
        req: Request,
        res: Response
    ) => {
        const carritoId = Number(req.params.carritoId);
        const itemId = Number(req.params.itemId);
        const { cantidad } = req.body;
        console.log("[Controller] PUT /api/carrito/:carritoId/items/:itemId -", { carritoId, itemId, cantidad });
        try {
            const carrito = await service.actualizarCantidad(carritoId, itemId, Number(cantidad));
            console.log("[Controller] PUT /api/carrito/:carritoId/items/:itemId - carrito actualizado:", carrito);
            res.status(200).json(carrito);
        } catch (error) {
            manejarError(error, res);
        }
    }

    // DELETE /api/carrito/:carritoId/items/:itemId  -> quitar un producto del carrito
    public eliminarItem = async (
        req: Request,
        res: Response
    ) => {
        const carritoId = Number(req.params.carritoId);
        const itemId = Number(req.params.itemId);
        console.log("[Controller] DELETE /api/carrito/:carritoId/items/:itemId -", { carritoId, itemId });
        try {
            const carrito = await service.eliminarItem(carritoId, itemId);
            console.log("[Controller] DELETE /api/carrito/:carritoId/items/:itemId - carrito actualizado:", carrito);
            res.status(200).json(carrito);
        } catch (error) {
            manejarError(error, res);
        }
    }

    // DELETE /api/carrito/:carritoId  -> vaciar el carrito
    public vaciarCarrito = async (
        req: Request,
        res: Response
    ) => {
        const carritoId = Number(req.params.carritoId);
        console.log("[Controller] DELETE /api/carrito/:carritoId - id:", carritoId);
        try {
            const carrito = await service.vaciarCarrito(carritoId);
            console.log("[Controller] DELETE /api/carrito/:carritoId - carrito vaciado:", carrito);
            res.status(200).json(carrito);
        } catch (error) {
            manejarError(error, res);
        }
    }

    // POST /api/carrito/:carritoId/finalizar  -> confirmar el pedido
    public finalizarPedido = async (
        req: Request,
        res: Response
    ) => {
        const carritoId = Number(req.params.carritoId);
        console.log("[Controller] POST /api/carrito/:carritoId/finalizar - id:", carritoId);
        try {
            const resumen = await service.finalizarPedido(carritoId);
            console.log("[Controller] POST /api/carrito/:carritoId/finalizar - resumen final:", resumen);
            res.status(200).json(resumen);
        } catch (error) {
            manejarError(error, res);
        }
    }
}