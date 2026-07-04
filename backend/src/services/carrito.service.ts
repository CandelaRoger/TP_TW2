import { CarritoRepository } from "../repository/carrito.repository.js";

export class CarritoService {

    constructor(private carritoRepository: CarritoRepository) { }

    private async obtenerOCrearCarrito(usuarioId: number) { 
        const carritoExistente = await this.carritoRepository.obtenerCarritoAbierto(usuarioId); 

        if (carritoExistente) {
            return carritoExistente;
        }

        return await this.carritoRepository.crearCarrito(usuarioId); 
    }

    async agregarProducto(usuarioId: number, productoId: number, cantidad: number) { 

        const producto = await this.carritoRepository.obtenerProducto(productoId);

        if (!producto) {
            throw new Error("ProductoNoExiste");
        }

        const carrito = await this.obtenerOCrearCarrito(usuarioId); 

        const itemExistente = await this.carritoRepository.obtenerItem(carrito.id, productoId);

        if (itemExistente) {
            await this.carritoRepository.incrementarItem(itemExistente.id, cantidad);
        } else {
            await this.carritoRepository.crearItem(carrito.id, productoId, cantidad);
        }

        return { mensaje: `${producto.nombre} se agregó correctamente al carrito` };
    }

    async actualizarCantidad(usuarioId: number, itemId: number, cantidad: number) {

        const item = await this.carritoRepository.obtenerItemPorId(itemId);

        if (!item || item.carrito.usuarioId !== usuarioId) { 
            throw new Error("ItemNoExiste");
        }

        if (cantidad < 1) {
            throw new Error("CantidadInvalida");
        }

        await this.carritoRepository.actualizarCantidadItem(itemId, cantidad);

        return { mensaje: "Cantidad actualizada correctamente" };
    }

    async eliminarProducto(usuarioId: number, itemId: number) { 

        const item = await this.carritoRepository.obtenerItemPorId(itemId);

        if (!item || item.carrito.usuarioId !== usuarioId) { 
            throw new Error("ItemNoExiste");
        }

        await this.carritoRepository.eliminarItem(itemId);

        return { mensaje: "Producto eliminado del carrito" };
    }

    async obtenerCarrito(usuarioId: number) { 
        const carrito = await this.carritoRepository.obtenerCarritoAbierto(usuarioId); 

        if (!carrito) {
            return { Items: [], Total: 0 };
        }

        const items = carrito.items.map((item: any) => ({
            Id: item.id,
            Nombre: item.producto.nombre,
            Clasificacion: item.producto.clasificacion,
            Precio: item.producto.precio,
            Cantidad: item.cantidad,
            Subtotal: item.producto.precio * item.cantidad,
            ImagenUrl: item.producto.imagenUrl
        }));

        const total = items.reduce((acc: number, item: any) => acc + item.Subtotal, 0);

        return { Items: items, Total: total };
    }

    async confirmarPedido(usuarioId: number) {
        const carrito = await this.carritoRepository.obtenerCarritoAbierto(usuarioId); 

        if (!carrito || carrito.items.length === 0) {
            throw new Error("CarritoVacio");
        }

        await this.carritoRepository.cerrarCarrito(carrito.id);

        return { mensaje: "Pedido confirmado con éxito" };
    }
}