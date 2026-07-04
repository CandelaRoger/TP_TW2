import { Request, Response } from "express";
import { UsuarioRepository } from "../repository/usuario.repository.js";
import { error } from "node:console";
import { UsuarioService } from "../services/usuario.service.js";

export class UsuarioController {

    private usuarioRepository = new UsuarioRepository();

    private usuarioService = new UsuarioService(this.usuarioRepository);

    registrar = async (req: Request, res: Response) => {

        try{
            const usuario= await this.usuarioService.registrar(req.body);
            return res.status(201).json({
                redirectUrl:"/login"
            })
        } catch (err: any) {

            if (err.message === "CAMPOS_VACIOS") {
                return res.status(400).json({
                    error: "Campos vacios"
                });
            }
            if (err.message === "PASSWORD_DEBIL") {
                return res.status(400).json({
                    error: "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una minúscula, un número y un carácter especial"
                });
            }
            if (err.message === "EMAIL_DUPLICADO") {
                return res.status(400).json({
                    error: "El correo electronico ya esta registrado"
                });
            }

            console.error(err);

            res.status(500).json({
                error: "Error interno ene el servidor"
            });

        }

    };

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
