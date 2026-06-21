import { Request, Response } from "express";
import { CarritoRepository } from "../repository/carrito.repository.js";
import { CarritoService, HttpError } from "../services/carrito.service.js";


const repository = new CarritoRepository();
const service = new CarritoService(repository);

function manejarError(error: unknown, res: Response) {
    if (error instanceof HttpError) {
        return res.status(error.status).json({ error: error.message });
    }

    console.error(error);
    return res.status(500).json({ error: "Error interno del servidor" });
}

export class CarritoController {

    // POST /api/carrito  -> crea un carrito nuevo y devuelve su id
    public crearCarrito = async (
        req: Request,
        res: Response
    ) => {
        try {
            const carrito = await service.crearCarrito();
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
        try {
            const carritoId = Number(req.params.carritoId);
            const carrito = await service.obtenerCarrito(carritoId);
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
        try {
            const carritoId = Number(req.params.carritoId);
            const { productoId, cantidad } = req.body;

            const carrito = await service.agregarItem(carritoId, Number(productoId), cantidad ? Number(cantidad) : 1);
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
        try {
            const carritoId = Number(req.params.carritoId);
            const itemId = Number(req.params.itemId);
            const { cantidad } = req.body;

            const carrito = await service.actualizarCantidad(carritoId, itemId, Number(cantidad));
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
        try {
            const carritoId = Number(req.params.carritoId);
            const itemId = Number(req.params.itemId);

            const carrito = await service.eliminarItem(carritoId, itemId);
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
        try {
            const carritoId = Number(req.params.carritoId);

            const carrito = await service.vaciarCarrito(carritoId);
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
        try {
            const carritoId = Number(req.params.carritoId);

            const resumen = await service.finalizarPedido(carritoId);
            res.status(200).json(resumen);
        } catch (error) {
            manejarError(error, res);
        }
    }
}