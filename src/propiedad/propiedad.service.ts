import { Injectable } from '@nestjs/common';
import { Propiedad } from './propiedad.interface';
// import{createID,readParse } from '../utils/utils'
import * as fs from 'fs'
import { uuid } from 'uuidv4';
import { join } from 'path'

// firebase
import { collection, getDocs, Firestore, DocumentData, addDoc, updateDoc, doc, setDoc, deleteDoc, where, query, getDoc } from 'firebase/firestore/lite';




// async function getpropi(db:Firestore) {
//     //referencia a la base de datos con la coleccion/array "propiedades"
//     const propiCollection = collection(db, 'propiedades');
//     // traeme el collecion de la referancia creada anteriormente y guardale en una variable.

//     const propiedad = await getDocs(propiCollection);
//     // El data() es un método incorporado en jQuery que se usa para adjuntar datos u obtener datos para los elementos seleccionados.
//     const propiedadLista = propiedad.docs.map(doc => doc.data());
//     return propiedadLista;
//   }


//   async function getCities(db:Firestore) {
//     const citiesCol = collection(db, 'cities');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     return cityList;
//   }











const URL = "http://localhost:3030/propiedad"

@Injectable()
export class PropiedadService {

    // async getPropiedades(): Promise <Propiedad[]>{
    //     const res = await fetch(URL);
    //     const parsed = await res.json();
    //     return parsed;
    // }


    async getPropiedades(db: Firestore): Promise<DocumentData[]> {
        //referencia a la base de datos con la coleccion/array "propiedades"
        const propiedadCollection = collection(db, 'propiedades');
        // traeme el collecion de la referancia creada anteriormente y guardale en una variable.


        const propiedad = await getDocs(propiedadCollection);
        // El data() es un método incorporado que nos trae data por cada docuemnto en este caso:

        const propiedades: any[] = []

        propiedad.docs.map(doc => {
            propiedades.push({
                // como el id viene separado de la data, creo un objeto en el cual creo una clave id y se le asigno el valor, en cuantoa a la data utilizo el express operator para qe cree una clave por cada una.
                id: doc.id,
                ...doc.data()
            })
        }
        );

        console.log(propiedades);
        return propiedades;

    }


    async getPropiedadById(db: Firestore, id: string): Promise<any> {

        const docRef = doc(db, "propiedades", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return (
                {
                    id: docSnap.id,
                    ...docSnap.data()
                }
            )
        } else {
            console.log("No existe");
        }

    }


    // async postPropiedad(propiedad: any){
    //     try {
    //         const newPropiedad = {id:uuid(), ... propiedad }

    //         const data = JSON.parse(fs.readFileSync((join(__dirname, '../../data/data.json')), 'utf-8'));

    //         data.propiedad.push(newPropiedad);
    //         fs.writeFileSync((join(__dirname, '../../data/data.json')), JSON.stringify(data, null, 2))
    //         return data
    //     } catch (error) {
    //         throw new Error("Created failed");
    //     }
    // }

    async postPropiedad(db: Firestore, propiedad: any) {
        const docRef = await addDoc(collection(db, "propiedades"), propiedad);
        console.log(docRef.id);
        return docRef.id;
    }


    async patchPropiedad(db: Firestore, body: any, id: string) {

        const docRef = doc(db, "propiedades",
            id);
        // update actualiza solamente el campo que le mandemos en el body, dejando los otros campos como estaban.
        await updateDoc(docRef, body);

    }

    async putPropiedad(db: Firestore, body: any, id: string) {

        const docRef = doc(db, "propiedades",
            id);

        // setdoc es destructivo, osea que remplaza el body del docuento por el body que le mandemos.
        await setDoc(docRef, body);

    }

    async deletePropiedad(db: Firestore, id: string) {

        const docRef = doc(db, "propiedades",
            id);

        await deleteDoc(docRef);

    }



}
