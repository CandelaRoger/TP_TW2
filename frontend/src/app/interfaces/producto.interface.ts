export interface ProductoBackend {
  Id: number;
  Nombre: string;
  Descripcion: string;
  Clasificacion: string;
  Precio: number;
  ImagenUrl: string;
}

export interface CarritoItemBackend {
  Id: number;
  Nombre: string;
  Clasificacion: string; 
  Precio: number;
  Cantidad: number;
  Subtotal: number;

}

export interface CarritoBackend {
  Items: CarritoItemBackend[];
  Total: number;
}