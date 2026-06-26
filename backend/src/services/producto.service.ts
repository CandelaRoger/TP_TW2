import { ProductoRepository } from "../repository/producto.repository.js";

// convertimos el objeto e Prisma (minúsculas) a PascalCase para el front 
   
function mapearProducto(producto: any) {
return {
        Id: producto.id,
        Nombre: producto.nombre,
        Descripcion: producto.descripcion,
        Clasificacion: producto.clasificacion,
        Precio: producto.precio,
    };
}
export class ProductoService {

    constructor(
        private productoRepository: ProductoRepository
    ) {}

    async obtenerProductos() {
        console.log("[Service] obtenerProductos() - consultando repositorio...");
        const productos = await this.productoRepository.obtenerTodos();
        console.log(`[Service] obtenerProductos() - se obtuvieron ${productos.length} productos de SQL Server`);
        return productos.map(mapearProducto);
    }

   async obtenerProducto(id: number) {
        console.log("[Service] obtenerProducto() - id:", id);
        const producto = await this.productoRepository.obtenerPorId(id);
        return producto ? mapearProducto(producto) : null;
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
        console.log("[Service] crearProducto() - datos a insertar:", { nombre, descripcion, clasificacion, precio });

        const nuevoProducto = await this.productoRepository.crear({
            nombre,
            descripcion,
            clasificacion,
            precio
        });
          console.log("[Service] crearProducto() - producto creado con id:", nuevoProducto.id);

        return mapearProducto(nuevoProducto);
    }
}