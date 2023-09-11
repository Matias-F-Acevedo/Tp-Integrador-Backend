export interface Usuario {
    id:string;
    nombre: string;
    apellido: string;
    email: string;
}

export interface UsuarioCompleto {
    id:string;
    nombre: string;
    apellido: string;
    email: string;
    contraseña: string;
}