import { Injectable } from '@nestjs/common';
import { Propiedad } from './propiedad.interface';
// Firebase:
import { collection, getDocs, Firestore, DocumentData, addDoc, updateDoc, doc, setDoc, deleteDoc, getDoc } from 'firebase/firestore/lite';
import { error } from 'console';




@Injectable()
export class PropiedadService {

    async getPropiedades(db: Firestore): Promise<any[]> {
        //referencia a la base de datos con la coleccion/array "propiedades"
        const propiedadCollection = collection(db, 'propiedades');
        // traeme el collecion de la referencia creada anteriormente y guardale en una variable.
        const docsPropiedad = await getDocs(propiedadCollection);
        // El data() es un método incorporado que nos trae data por cada docuemnto en este caso:
        const arrayPropiedades: any[] = []

        docsPropiedad.docs.map(doc => {
            arrayPropiedades.push({
                // como el id viene separado de la data, creo un objeto en el cual creo una clave id y se le asigno el valor, en cuantoa a la data utilizo el express operator para que cree una clave por cada una.
                id: doc.id,
                ...doc.data()
            })
        }
        );

        return arrayPropiedades;

    }


    async getPropiedadById(db: Firestore, id: string): Promise<DocumentData> {

        const refDoc = doc(db, "propiedades", id);
        const docPorId = await getDoc(refDoc);

        if (docPorId.exists()) {
            return (
                {
                    id: docPorId.id,
                    ...docPorId.data()
                }
            )
        } else return new error()
    }

    async createPropiedad(db: Firestore, propiedad: any):Promise<DocumentData> {
        try {
            await addDoc(collection(db, "propiedades"), propiedad);
        return (
                {
                 ...propiedad
                }
        );
        }catch (error){
            throw new Error("created failed")
        }
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
