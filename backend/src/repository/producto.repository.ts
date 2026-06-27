import { PrismaClient } from "../prisma/index.js";
const prisma = new PrismaClient();

export class ProductoRepository {
  
  
  async obtenerTodos() {
    return await prisma.producto.findMany();
  }


  async crear(data: { nombre: string; descripcion: string; clasificacion: string; precio: any; imagenUrl: string }) {
    return await prisma.producto.create({ 
      data: {
        Nombre: data.nombre,
        Descripcion: data.descripcion,
        Clasificacion: data.clasificacion,
        Precio: data.precio,
        imagenUrl: data.imagenUrl
      }
    });
  }

  
  async obtenerPorId(id: number) {
    return await prisma.producto.findUnique({ 
      where: { Id: Number(id) }
    });
  }
}