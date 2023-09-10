import { initializeApp } from "firebase/app";
// para poder conectarme desde mi frontend a el servicio de almacenamiento(firebase) tengo que importar:
// getstorage: sirve para primero conectarnos al backend.
// ref: es una referencia, la cual creo dentro de la funcion uploadFile()
// uploadBytes: es la forma de subir ARCHIVOS. (hay mas formas)
// getDownloadURL: nos retorna la url del archivo, nos sirve  para poder mostrarselo al usuario.
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage'

// importo el uuid v4 para generar una id aleatoria y poder darsela como nombre al archivo subido, evitando el sobreescribir los mismos. 
import {v4} from 'uuid'




const firebaseConfig = {
  apiKey: "AIzaSyCbljOcil_7Wc6GmQtBTzy2jYJnXZ-1_4c",
  authDomain: "lostpaws-tp-final-integrador.firebaseapp.com",
  projectId: "lostpaws-tp-final-integrador",
  storageBucket: "lostpaws-tp-final-integrador.appspot.com",
  messagingSenderId: "451646127910",
  appId: "1:451646127910:web:f27bce19828ee5be540be7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ejecuto el getStorage y lo que pide por parametro es la aplicacion configurada(app), lo guardo en una constante, siendo esta la forma de decirle que ahi vos a subir los archivos, por eso mismo lo exporto para poder utilizarlo en otras partes: 
export const storage = getStorage(app)


// funcion para subir archivos, que recibe por parametro el archivo a subir, lo exporto para poder utilizarlo en otras partes. 
// utilizo async await para manejar las promesas mas facilmente, le estoy diciendo que me suba el archivo y que cuando termine retorne la respuesta.
export async function uploadFile(file) {
    // esto es la referencia a donde va a subir los archivos, el segundo parametro es el nombre del archivo, en este caso le asgino una id aleatoria:
    const storageRef = ref(storage, v4())
    // la siguiente funcion es la forma para subir archivos y recibe dos parametros: uno es la referencia a donde vamos a subir el archivo y el otro es el archivo mismo, pero como esto es asíncrono, lo manejamos como una promesa. 
    await uploadBytes(storageRef, file)
    // como es asincrono le decimimos que cuando termine nos retorne la url, utilizando la funcion getDownloanURL. 
    const url = await getDownloadURL(storageRef)
    return url;
}