import { ProductoRepository } from "../repository/producto.repository.js";


function mapearProducto(producto: any) {
    return {
        Id: producto.id,
        Nombre: producto.nombre,
        Descripcion: producto.descripcion,
        Clasificacion: producto.clasificacion,
        Precio: producto.precio,
        ImagenUrl: producto.imagenUrl 
    };
}

export class ProductoService {

    constructor(
        private productoRepository: ProductoRepository
    ) {}

    async obtenerProductos() {
    
        const productos = await this.productoRepository.obtenerTodos();
        return productos.map(mapearProducto);
    }

    async obtenerProducto(id: number) {
    
        const producto = await this.productoRepository.obtenerPorId(id);
        return producto ? mapearProducto(producto) : null;
    }

    async crearProducto(producto: any) {
        const {
            nombre,
            descripcion,
            clasificacion,
            precio,
            imagenUrl 
        } = producto;

        if (!nombre) {
            throw new Error("Nombre obligatorio");
        }

        if (precio == null || precio <= 0) {
            throw new Error("Precio inválido");
        }
        
        const nuevoProducto = await this.productoRepository.crear({
            nombre,
            descripcion,
            clasificacion,
            precio,
            imagenUrl: imagenUrl || '/assets/productos/default.jpg' 
        });
        return mapearProducto(nuevoProducto);
    }
}