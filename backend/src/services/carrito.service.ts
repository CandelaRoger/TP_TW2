import { CarritoRepository } from "../repository/carrito.repository.js";

export class HttpError extends Error {
    constructor(public status: number, message: string) {
        super(message);
    }
}

function mapearCarrito(carrito: any) {
    const items = (carrito.items ?? []).map((item: any) => ({
        ItemId: item.id,
        ProductoId: item.productoId,
        Nombre: item.producto.nombre,
        Descripcion: item.producto.descripcion,
        Clasificacion: item.producto.clasificacion,
        Precio: item.producto.precio,
        Cantidad: item.cantidad,
        Subtotal: item.producto.precio * item.cantidad,
    }));

    const total = items.reduce((acc: number, item: any) => acc + item.Subtotal, 0);

    return {
        CarritoId: carrito.id,
        Cerrado: carrito.cerrado,
        Items: items,
        Total: total,
    };
}

export class CarritoService {

    constructor(
        private carritoRepository: CarritoRepository
    ) {}

    async crearCarrito() {
        const carrito = await this.carritoRepository.crearCarrito();
        return { CarritoId: carrito.id };
    }

    async obtenerCarrito(carritoId: number) {
        const carrito = await this.carritoRepository.obtenerPorId(carritoId);

        if (!carrito) {
            throw new HttpError(404, "Carrito no encontrado");
        }

        return mapearCarrito(carrito);
    }

    async agregarItem(carritoId: number, productoId: number, cantidad: number = 1) {

        if (!productoId) {
            throw new HttpError(400, "productoId es obligatorio");
        }

        if (!Number.isInteger(cantidad) || cantidad <= 0) {
            throw new HttpError(400, "cantidad debe ser un entero mayor a 0");
        }

        const carrito = await this.carritoRepository.obtenerPorId(carritoId);
        if (!carrito) {
            throw new HttpError(404, "Carrito no encontrado");
        }

        const producto = await this.carritoRepository.obtenerProducto(productoId);
        if (!producto) {
            throw new HttpError(404, "Producto no encontrado");
        }

        const itemExistente = await this.carritoRepository.obtenerItem(carritoId, productoId);

        if (itemExistente) {
            await this.carritoRepository.incrementarCantidad(itemExistente.id, cantidad);
        } else {
            await this.carritoRepository.agregarItem(carritoId, productoId, cantidad);
        }

        return this.obtenerCarrito(carritoId);
    }

    async actualizarCantidad(carritoId: number, itemId: number, cantidad: number) {

        if (!Number.isInteger(cantidad) || cantidad <= 0) {
            throw new HttpError(400, "cantidad debe ser un entero mayor a 0");
        }

        const item = await this.carritoRepository.obtenerItemPorId(carritoId, itemId);
        if (!item) {
            throw new HttpError(404, "Item no encontrado en el carrito");
        }

        await this.carritoRepository.actualizarCantidad(itemId, cantidad);

        return this.obtenerCarrito(carritoId);
    }

    async eliminarItem(carritoId: number, itemId: number) {

        const item = await this.carritoRepository.obtenerItemPorId(carritoId, itemId);
        if (!item) {
            throw new HttpError(404, "Item no encontrado en el carrito");
        }

        await this.carritoRepository.eliminarItem(itemId);

        return this.obtenerCarrito(carritoId);
    }

    async vaciarCarrito(carritoId: number) {

        const carrito = await this.carritoRepository.obtenerPorId(carritoId);
        if (!carrito) {
            throw new HttpError(404, "Carrito no encontrado");
        }

        await this.carritoRepository.vaciarCarrito(carritoId);

        return this.obtenerCarrito(carritoId);
    }

    async finalizarPedido(carritoId: number) {

        const carrito = await this.carritoRepository.obtenerPorId(carritoId);
        if (!carrito) {
            throw new HttpError(404, "Carrito no encontrado");
        }

        if (!carrito.items || carrito.items.length === 0) {
            throw new HttpError(400, "El carrito está vacío");
        }

        const resumen = mapearCarrito(carrito);
        await this.carritoRepository.cerrarCarrito(carritoId);

        return resumen;
    }
    // deberiamos usar una vista o un framework para mostrar estos msj de error, chequear cmo conectarlo
}