import { PrismaClient } from "../prisma/index.js";

const prisma = new PrismaClient();

export class UsuarioRepository {

    async registrar(data: {
        nombre: string;
        apellido: string;
        email: string;
        password: string;
        direccion: string;
    }) {

        return await prisma.usuario.create({
            data: {
                Nombre: data.nombre,
                Apellido: data.apellido,
                Email: data.email,
                Password: data.password,
                Direccion: data.direccion
            }
        });

    }

}