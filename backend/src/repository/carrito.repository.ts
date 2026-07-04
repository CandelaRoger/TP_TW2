import { PrismaClient } from "../prisma/index.js";

const prisma = new PrismaClient();
export class CarritoRepository {

    

    async obtenerCarritoAbierto(usuarioId: number) { 
        return await prisma.carrito.findFirst({
            where: { usuarioId, cerrado: false }, 
            include: { items: { include: { producto: true } } }
        });
    }
 
    async crearCarrito(usuarioId: number) { 
        return await prisma.carrito.create({
            data: { usuarioId } 
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

    async obtenerItemPorId(itemId: number) {
        return await prisma.carritoItem.findUnique({
            where: { id: itemId },
             include: { carrito: true }
        });
    }

    async actualizarCantidadItem(itemId: number, cantidad: number) {
        return await prisma.carritoItem.update({
            where: { id: itemId },
            data: { cantidad }
        });
    }

    async eliminarItem(itemId: number) {
        return await prisma.carritoItem.delete({
            where: { id: itemId }
        });
    }

    async cerrarCarrito(carritoId: number) {
        return await prisma.carrito.update({
            where: { id: carritoId },
            data: { cerrado: true }
        });
    }
}