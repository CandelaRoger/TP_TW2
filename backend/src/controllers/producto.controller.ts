import { Request, Response } from "express";
import { ProductoRepository } from "../repository/producto.repository.js";
import { ProductoService } from "../services/producto.service.js";

const repository = new ProductoRepository();
const service = new ProductoService(repository);

export class ProductoController {

    public getProductos = async (
        req:Request,
        res:Response
    ) => {

        console.log("[Controller] GET /api/datos - petición recibida");

        try {

            const productos =
                await service.obtenerProductos();

            console.log(`[Controller] GET /api/datos - respondiendo ${productos.length} productos al frontend`);

            res.status(200).json(productos);

        } catch(error) {

            console.error("[Controller] GET /api/datos - error:", error);

            res.status(500).json(error);
        }
    }

    public createProducto = async (
        req:Request,
        res:Response
    ) => {

        console.log("[Controller] POST /api/datos - body recibido:", req.body);

        try {

            const producto =
                await service.crearProducto(req.body);

            console.log("[Controller] POST /api/datos - producto creado:", producto);

            res.status(201).json(producto);

        } catch(error) {

            console.error("[Controller] POST /api/datos - error:", error);

            res.status(500).json(error);
        }
    }
}