import { UsuarioRepository } from "../repository/usuario.repository.js";

export class UsuarioService {

    constructor(private usuarioRepository: UsuarioRepository) {}

    async registrar(datosUsuarios: any){
        const { nombre, apellido, email, password, direccion } = datosUsuarios;

        const campos = [nombre, apellido, email, password, direccion];

        if (campos.some(campo => !campo)
        ) {
            throw new Error("CAMPOS_VACIOS");
            
        }

        const passwordInvalida =
            password.length < 8 ||
            !/[A-Z]/.test(password) ||
            !/[0-9]/.test(password) ||
            !/[a-z]/.test(password) ||
            !/[!#$%&*]/.test(password);

        if (passwordInvalida) {
           throw new Error("PASSWORD_DEBIL");
        }

        try {
            const usuario = await this.usuarioRepository.registrar({
                nombre,
                apellido,
                email,
                password,
                direccion
            });

        } catch (err: any) {

            if (err.code === "P2002") {
                throw new Error("EMAIL_DUPLICADO")
            }
            throw err;

        }
    }
    async login(email: string, password: string) {

        const usuario = await this.usuarioRepository.buscarPorEmail(email);

        if (!usuario) {
            throw new Error("CredencialesInvalidas");
        }

        if (usuario.password !== password) {
            throw new Error("CredencialesInvalidas");
        }

        const { password: _, ...usuarioSinPassword } = usuario;

        return usuarioSinPassword;
    }

}