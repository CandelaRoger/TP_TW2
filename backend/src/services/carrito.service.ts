import { CarritoRepository } from "../repository/carrito.repository.js";

export class CarritoService {

    constructor(private carritoRepository: CarritoRepository) { }

    private async obtenerOCrearCarrito() {
        const carritoExistente = await this.carritoRepository.obtenerCarritoAbierto();

        if (carritoExistente) {
            return carritoExistente;
        }

        return await this.carritoRepository.crearCarrito();
    }

    async agregarProducto(productoId: number, cantidad: number) {

        const producto = await this.carritoRepository.obtenerProducto(productoId);

        if (!producto) {
            throw new Error("ProductoNoExiste");
        }

        const carrito = await this.obtenerOCrearCarrito();

        const itemExistente = await this.carritoRepository.obtenerItem(carrito.id, productoId);

        if (itemExistente) {
            await this.carritoRepository.incrementarItem(itemExistente.id, cantidad);
        } else {
            await this.carritoRepository.crearItem(carrito.id, productoId, cantidad);
        }

        return { mensaje: `${producto.nombre} se agregó correctamente al carrito` };
    }

    async obtenerCarrito() {
        const carrito = await this.carritoRepository.obtenerCarritoAbierto();

        if (!carrito) {
            return { Items: [], Total: 0 };
        }

        const items = carrito.items.map((item: any) => ({
            Id: item.id,
            Nombre: item.producto.nombre,
            Precio: item.producto.precio,
            Cantidad: item.cantidad,
            Subtotal: item.producto.precio * item.cantidad
        }));

        const total = items.reduce((acc: number, item: any) => acc + item.Subtotal, 0);

        return { Items: items, Total: total };
    }

    async confirmarPedido() {
        const carrito = await this.carritoRepository.obtenerCarritoAbierto();

        if (!carrito || carrito.items.length === 0) {
            throw new Error("CarritoVacio");
        }

        await this.carritoRepository.vaciarCarrito(carrito.id);

        return { mensaje: "Pedido confirmado con éxito" };
    }
}