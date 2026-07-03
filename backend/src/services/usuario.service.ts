import { UsuarioRepository } from "../repository/usuario.repository.js";

export class UsuarioService {

    constructor(private usuarioRepository: UsuarioRepository) {}

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