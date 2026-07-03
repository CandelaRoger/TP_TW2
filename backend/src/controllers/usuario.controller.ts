import { Request, Response } from "express";
import { UsuarioRepository } from "../repository/usuario.repository.js";
import { error } from "node:console";
import { UsuarioService } from "../services/usuario.service.js";

export class UsuarioController {

    private usuarioRepository = new UsuarioRepository();

    private usuarioService = new UsuarioService(this.usuarioRepository);

    registrar = async (req: Request, res: Response) => {

        const { nombre, apellido, email, password, direccion } = req.body;

        const campos = [nombre, apellido, email, password, direccion];

        if (campos.some(campo => !campo)
        ) {
            return res.status(400).json({
                error: "Campos vacios"
            });
        }
        const passwordInvalida =
            password.length < 8 ||
            !/[A-Z]/.test(password) ||
            !/[0-9]/.test(password) ||
            !/[a-z]/.test(password) ||
            !/[!#$%&*]/.test(password);

        if (passwordInvalida) {
            return res.status(400).json({
                error: "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una minúscula, un número y un carácter especial"
            })
        }

        try {
            const usuario = await this.usuarioRepository.registrar({
                nombre,
                apellido,
                email,
                password,
                direccion
            });

            //res.redirect(/login); 
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

    // aca esta mi parte de login cande

    login = async (req: Request, res: Response) => {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                error: "Debe completar todos los campos"
            });
        }

        try {
            const usuario = await this.usuarioService.login(email, password);

            res.status(200).json({
                message: "Inicio de sesion exitoso",
                usuario
            });

        } catch (err: any) {

            if (err.message === "CredencialesInvalidas") {
                return res.status(401).json({
                    error: "Email o contraseña incorrectos"
                });
            }

            console.error(err);

            res.status(500).json({
                error: err.message
            });
        }
    }
}
