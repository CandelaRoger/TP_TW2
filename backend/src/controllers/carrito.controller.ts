import { Response } from "express"; 
import { CarritoRepository } from "../repository/carrito.repository.js";
import { CarritoService } from "../services/carrito.service.js";
import { RequestConUsuario } from "../middlewares/auth.middleware.js";
const carritoRepository = new CarritoRepository();
const carritoService = new CarritoService(carritoRepository);

export class CarritoController {

    constructor() { }

    public agregarProducto = async (req: RequestConUsuario, res: Response) => { 

        const usuarioId = req.usuarioId!; 
        const productoId = Number(req.body.productoId);
        const cantidad = req.body.cantidad ? Number(req.body.cantidad) : 1;

        if (isNaN(productoId)) {
            return res.status(400).json({ message: "productoId inválido" });
        }

        try {
            const resultado = await carritoService.agregarProducto(usuarioId, productoId, cantidad); 
            res.status(201).json(resultado);

        } catch (error: any) {

            console.error("[Controller] POST /api/carrito - error:", error);

            if (error.message === "ProductoNoExiste") {
                return res.status(404).json({ message: "Producto no encontrado" });
            }

            res.status(500).json({ message: "No se pudo agregar el producto al carrito", error: error.message });
        }
    }

    public actualizarCantidad = async (req: RequestConUsuario, res: Response) => { 

        const usuarioId = req.usuarioId!;
        const itemId = Number(req.params.itemId);
        const cantidad = Number(req.body.cantidad);

        if (isNaN(itemId) || isNaN(cantidad)) {
            return res.status(400).json({ message: "Datos inválidos" });
        }

        try {
            const resultado = await carritoService.actualizarCantidad(usuarioId, itemId, cantidad); 
            res.status(200).json(resultado);

        } catch (error: any) {

            console.error("[Controller] PUT /api/carrito/:itemId - error:", error);

            if (error.message === "ItemNoExiste") {
                return res.status(404).json({ message: "El item no existe en el carrito" });
            }

            if (error.message === "CantidadInvalida") {
                return res.status(400).json({ message: "La cantidad debe ser mayor o igual a 1" });
            }

            res.status(500).json({ message: "No se pudo actualizar la cantidad", error: error.message });
        }
    }

    
    public eliminarProducto = async (req: RequestConUsuario, res: Response) => { 

        const usuarioId = req.usuarioId!; 
        const itemId = Number(req.params.itemId);

        if (isNaN(itemId)) {
            return res.status(400).json({ message: "itemId inválido" });
        }

        try {
            const resultado = await carritoService.eliminarProducto(usuarioId, itemId); 
            res.status(200).json(resultado);

        } catch (error: any) {

            console.error("[Controller] DELETE /api/carrito/:itemId - error:", error);

            if (error.message === "ItemNoExiste") {
                return res.status(404).json({ message: "El item no existe en el carrito" });
            }

            res.status(500).json({ message: "No se pudo eliminar el producto", error: error.message });
        }
    }

    public verCarrito = async (req: RequestConUsuario, res: Response) => {
        try {
            const carrito = await carritoService.obtenerCarrito(req.usuarioId!); 
            res.status(200).json(carrito);

        } catch (error: any) {
            console.error("[Controller] GET /api/carrito - error:", error);
            res.status(500).json({ message: "No se pudo obtener el carrito", error: error.message });
        }
    }


    public confirmarPedido = async (req: RequestConUsuario, res: Response) => { 
        try {
            const resultado = await carritoService.confirmarPedido(req.usuarioId!); 
            res.status(200).json(resultado);

        } catch (error: any) {

            console.error("[Controller] POST /api/carrito/confirmar - error:", error);

            if (error.message === "CarritoVacio") {
                return res.status(400).json({ message: "El carrito está vacío" });
            }

            res.status(500).json({ message: "No se pudo confirmar el pedido", error: error.message });
        }
    }
}