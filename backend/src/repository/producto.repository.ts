import { PrismaClient } from '../prisma/index.js';

const prisma = new PrismaClient();


export class ProductoRepository {
  async obtenerTodos() {
    return await prisma.producto.findMany();
  }

  async crear(data: { nombre: string; descripcion: string; clasificacion: string; precio: number }) {
    return await prisma.producto.create({ data });
  }

  async obtenerPorId(id: number) {
    return await prisma.producto.findUnique({ where: { id } });
  }
}