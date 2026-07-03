import { Request, Response } from "express";
import { CarritoRepository } from "../repository/carrito.repository.js";
import { CarritoService } from "../services/carrito.service.js";

const carritoRepository = new CarritoRepository();
const carritoService = new CarritoService(carritoRepository);

export class CarritoController {

    constructor() { }
//dejo endpoints asi conecto al front 
    // POST /api/carrito   agrega un producto al carrito
    public agregarProducto = async (req: Request, res: Response) => {

        const productoId = Number(req.body.productoId);
        const cantidad = req.body.cantidad ? Number(req.body.cantidad) : 1;

        if (isNaN(productoId)) {
            return res.status(400).json({ message: "productoId inválido" });
        }

        try {
            const resultado = await carritoService.agregarProducto(productoId, cantidad);
            res.status(201).json(resultado);

        } catch (error: any) {

            console.error("[Controller] POST /api/carrito - error:", error);

            if (error.message === "ProductoNoExiste") {
                return res.status(404).json({ message: "Producto no encontrado" });
            }

            res.status(500).json({ message: "No se pudo agregar el producto al carrito", error: error.message });
        }
    }

    // PUT /api/carrito/:itemId   actualiza la cantidad de un item del carrito
    public actualizarCantidad = async (req: Request, res: Response) => {

        const itemId = Number(req.params.itemId);
        const cantidad = Number(req.body.cantidad);

        if (isNaN(itemId) || isNaN(cantidad)) {
            return res.status(400).json({ message: "Datos inválidos" });
        }

        try {
            const resultado = await carritoService.actualizarCantidad(itemId, cantidad);
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

    // DELETE /api/carrito/:itemId   elimina un item del carrito
    public eliminarProducto = async (req: Request, res: Response) => {

        const itemId = Number(req.params.itemId);

        if (isNaN(itemId)) {
            return res.status(400).json({ message: "itemId inválido" });
        }

        try {
            const resultado = await carritoService.eliminarProducto(itemId);
            res.status(200).json(resultado);

        } catch (error: any) {

            console.error("[Controller] DELETE /api/carrito/:itemId - error:", error);

            if (error.message === "ItemNoExiste") {
                return res.status(404).json({ message: "El item no existe en el carrito" });
            }

            res.status(500).json({ message: "No se pudo eliminar el producto", error: error.message });
        }
    }

    // GET /api/carrito   ver el carrito actual 
    public verCarrito = async (req: Request, res: Response) => {
        try {
            const carrito = await carritoService.obtenerCarrito();
            res.status(200).json(carrito);

        } catch (error: any) {
            console.error("[Controller] GET /api/carrito - error:", error);
            res.status(500).json({ message: "No se pudo obtener el carrito", error: error.message });
        }
    }

    // POST /api/carrito/confirmar   no es una compra real, solo vacía el carrito
    public confirmarPedido = async (req: Request, res: Response) => {
        try {
            const resultado = await carritoService.confirmarPedido();
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