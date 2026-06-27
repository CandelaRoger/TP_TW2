import { PrismaClient } from "../prisma/index.js";

const prisma = new PrismaClient();

export class CarritoRepository {

    async crearCarrito() {
        return await prisma.carrito.create({ data: {} });
    }

    async obtenerPorId(carritoId: number) {
        return await prisma.carrito.findUnique({
            where: { id: carritoId },
            include: {
                items: {
                    include: { producto: true },
                },
            },
        });
    }

    async obtenerProducto(productoId: number) {
        return await prisma.producto.findUnique({ where: { id: productoId } });
    }

    async obtenerItem(carritoId: number, productoId: number) {
        return await prisma.carritoItem.findUnique({
            where: {
                carritoId_productoId: { carritoId, productoId },
            },
        });
    }

    async obtenerItemPorId(carritoId: number, itemId: number) {
        return await prisma.carritoItem.findFirst({
            where: { id: itemId, carritoId },
        });
    }

    async agregarItem(carritoId: number, productoId: number, cantidad: number) {
        return await prisma.carritoItem.create({
            data: { carritoId, productoId, cantidad },
            include: { producto: true },
        });
    }

    async incrementarCantidad(itemId: number, cantidad: number) {
        return await prisma.carritoItem.update({
            where: { id: itemId },
            data: { cantidad: { increment: cantidad } },
            include: { producto: true },
        });
    }

    async actualizarCantidad(itemId: number, cantidad: number) {
        return await prisma.carritoItem.update({
            where: { id: itemId },
            data: { cantidad },
            include: { producto: true },
        });
    }

    async eliminarItem(itemId: number) {
        return await prisma.carritoItem.delete({ where: { id: itemId } });
    }

    async vaciarCarrito(carritoId: number) {
        return await prisma.carritoItem.deleteMany({ where: { carritoId } });
    }

    async cerrarCarrito(carritoId: number) {
        return await prisma.carrito.update({
            where: { id: carritoId },
            data: { cerrado: true },
        });
    }
}