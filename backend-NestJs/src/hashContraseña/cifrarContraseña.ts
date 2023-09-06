import * as bcrypt from 'bcrypt';


export function cifrarContraseña(contraseña:string):string{
    const hashcontraseña = bcrypt.hashSync(contraseña, 8)
    return hashcontraseña;
}



