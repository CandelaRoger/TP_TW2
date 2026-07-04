
import { Request, Response, NextFunction } from "express";

export interface RequestConUsuario extends Request {
    usuarioId?: number;
}

export function requireUsuario(req: RequestConUsuario, res: Response, next: NextFunction) {

    const usuarioIdHeader = req.header("x-usuario-id");
    const usuarioId = Number(usuarioIdHeader);

    if (!usuarioIdHeader || isNaN(usuarioId) || usuarioId <= 0) {
        return res.status(401).json({ message: "Debe iniciar sesión para usar el carrito" });
    }

    req.usuarioId = usuarioId;
    next();
}