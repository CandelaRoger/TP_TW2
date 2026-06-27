import { PrismaClient } from "../prisma/index.js";

const prisma = new PrismaClient();

// usrio fijo mientras no esté conectado el login con el carrito
const USUARIO_ID_DEFAULT = 1;

export class CarritoRepository {

    async obtenerCarritoAbierto() {
        return await prisma.carrito.findFirst({
            where: { usuarioId: USUARIO_ID_DEFAULT, cerrado: false },
            include: { items: { include: { producto: true } } }
        });
    }

    async crearCarrito() {
        return await prisma.carrito.create({
            data: { usuarioId: USUARIO_ID_DEFAULT }
        });
    }

    async obtenerProducto(productoId: number) {
        return await prisma.producto.findUnique({
            where: { id: productoId }
        });
    }

    async obtenerItem(carritoId: number, productoId: number) {
        return await prisma.carritoItem.findFirst({
            where: { carritoId, productoId }
        });
    }

    async crearItem(carritoId: number, productoId: number, cantidad: number) {
        return await prisma.carritoItem.create({
            data: { carritoId, productoId, cantidad }
        });
    }

    async incrementarItem(itemId: number, cantidad: number) {
        return await prisma.carritoItem.update({
            where: { id: itemId },
            data: { cantidad: { increment: cantidad } }
        });
    }

    async vaciarCarrito(carritoId: number) {
        return await prisma.carritoItem.deleteMany({
            where: { carritoId }
        });
    }
}