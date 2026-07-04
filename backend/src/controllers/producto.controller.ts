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
        try {

            const productos =
                await service.obtenerProductos();
            res.status(200).json(productos);

        } catch(error) {

            res.status(500).json(error);
        }
    }
    public createProducto = async (
        req:Request,
        res:Response
    ) => {
        try {
            const producto =
                await service.crearProducto(req.body);

            res.status(201).json(producto);

        } catch(error) {
            res.status(500).json(error);
        }
    }
}