import { Request, Response } from "express";
import { UsuarioRepository } from "../repository/usuario.repository.js";
import { error } from "node:console";

export class UsuarioController {

    private usuarioRepository = new UsuarioRepository();

    registrar = async (req: Request, res: Response) => {

        const { nombre, apellido, email, password, direccion } = req.body;

        const campos =[nombre, apellido,email,password, direccion];

        if (campos.some(campo=> !campo)
        ) {
            return res.status(400).json({
                error: "Campos vacios"
            });
        }
        const passwordInvalida=
              password.length < 8 || 
              !/[A-Z]/.test(password) ||
              !/[0-9]/.test(password) ||
              !/[a-z]/.test(password) ||
              !/[!#$%&*]/.test(password);
        
        if(passwordInvalida){
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

}