export interface CarritoItem {
    Id?: number;
    CarritoId: number;
    ProductoId: number;
    Cantidad: number;
}

export interface AgregarItemInput {
    productoId: number;
    cantidad?: number;
}

export interface ActualizarItemInput {
    cantidad: number;
}
