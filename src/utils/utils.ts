// import * as fs from 'fs'
// import {join} from 'path'




// export function readParse(entidad){
//     // const entidad = join(__dirname, '../../data/data.json')
//     const fileContent = fs.readFileSync(entidad, 'utf-8');
//     console.log(fileContent);
//     return JSON.parse(fileContent);
// }

// export function createID(){
//     const entidad = readParse();
//     //esto es un registro
//     const ultimaEntidad = entidad[entidad.length - 1];
//     //obtengo el valor del id del ultimo registro + 1
//     const id = ultimaEntidad.id + 1;
//     return id;
// }