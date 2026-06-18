import { ProductoRepository } from "../repository/producto.repository.js";

export class ProductoService {

    constructor(
        private productoRepository: ProductoRepository
    ) {}

    async obtenerProductos() {
        return await this.productoRepository.obtenerTodos();
    }

    async obtenerProducto(id: number) {
        return await this.productoRepository.obtenerPorId(id);
    }

    async crearProducto(producto: any) {

        const {
            nombre,
            descripcion,
            clasificacion,
            precio
        } = producto;

        if (!nombre) {
            throw new Error("Nombre obligatorio");
        }

        if (precio == null || precio <= 0) {
            throw new Error("Precio inválido");
        }

        return await this.productoRepository.crear({
            nombre,
            descripcion,
            clasificacion,
            precio
        });
    }
}