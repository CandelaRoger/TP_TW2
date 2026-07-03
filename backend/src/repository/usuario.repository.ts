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
                nombre: data.nombre,
                apellido: data.apellido,
                email: data.email,
                password: data.password,
                direccion: data.direccion
            }
        });

    }

    async buscarPorEmail(email: string) {
        return await prisma.usuario.findUnique({
            where: {
                email: email
            }
        });

    }
}

