import { Request, Response } from "express";
import { UsuarioRepository } from "../repository/usuario.repository.js";

export class UsuarioController {

    private usuarioRepository = new UsuarioRepository();

    registrar = async (req: Request, res: Response) => {

        const { nombre, apellido, email, password, direccion } = req.body;

        if (!nombre || !apellido || !email || !password || !direccion) {
            return res.status(400).json({
                error: "Todos los campos son obligatorios."
            });
        }

        try {

            const usuario = await this.usuarioRepository.registrar({
                nombre,
                apellido,
                email,
                password,
                direccion
            });

            res.status(201).json({
                message: "Usuario registrado con éxito.",
                usuario
            });

        } catch (err: any) {

            if (err.code === "P2002") {
                return res.status(400).json({
                    error: "El correo electrónico ya está registrado."
                });
            }

            console.error(err);

            res.status(500).json({
                error: err.message
            });

        }

    };

}