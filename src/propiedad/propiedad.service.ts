import { Injectable } from '@nestjs/common';
import { Propiedad } from './propiedad.interface';
// Firebase:
import { collection, getDocs, Firestore, DocumentData, addDoc, updateDoc, doc, setDoc, deleteDoc, getDoc } from 'firebase/firestore/lite';
import { error } from 'console';
import db from 'src/firebase/config';



@Injectable()
export class PropiedadService {

    async getPropiedades(): Promise<any[]> {
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


    async getPropiedadById(id: string): Promise<DocumentData> {

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

    async createPropiedad(propiedad: any): Promise<DocumentData> {
        try {
            await addDoc(collection(db, "propiedades"), propiedad);
            return (
                {
                    ...propiedad
                }
            );
        } catch (error) {
            throw new Error("created failed")
        }
    }

    async patchPropiedad(body: any, id: string):Promise<{ success: boolean, message: string }> {
        const docRef = doc(db, "propiedades", id);
        const docPorId = await getDoc(docRef);
        if (docPorId.exists()) {
            // update actualiza solamente el campo que le mandemos en el body, dejando los otros campos como estaban.
            await updateDoc(docRef, body);
            return { success: true, message: `Propiedad edited` }
        } else {
            return new error()
        }
    }

    async putPropiedad(body: any, id: string): Promise<{ success: boolean, message: string }> {
        const docRef = doc(db, "propiedades", id);
        const docPorId = await getDoc(docRef);
        if (docPorId.exists()) {
            // setdoc es destructivo, osea que remplaza el body del docuento por el body que le mandemos.
            await setDoc(docRef, body);
            return { success: true, message: `Propiedad edited` }
        } else {
            return new error()
        }
    }

    async deletePropiedad(id: string): Promise<{ success: boolean, message: string }> {
        const docRef = doc(db, "propiedades", id);
        const docPorId = await getDoc(docRef);
        if (docPorId.exists()) {
            await deleteDoc(docRef);
            return { success: true, message: `Propiedad with id: {${id}} was deleted` }

        } else {
            return new error()
        }
    }

}
