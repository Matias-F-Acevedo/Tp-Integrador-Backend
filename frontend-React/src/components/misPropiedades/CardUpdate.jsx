import "./misPropiedades.css"
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { updateOne } from "../../service/functionsHTTP";
import Swal from "sweetalert2";
import Footer from "../footer/Footer";

const urlBase = "http://localhost:3000/api/propiedad"

function CardUpdate({ propiedad, setActualizar ,refresh, setrefresh, }) {

    const { user } = useContext(UserContext);

    const [propiedadActual, setPropiedadActual] = useState({
        "dueño": propiedad.dueño,
        "precio": propiedad.precio,
        "ubicacion": propiedad.ubicacion,
        "superficieTotal": propiedad.superficieTotal,
        "superficieCubierta": propiedad.superficieCubierta,
        "ambientes": propiedad.ambientes,
        "tipo_de_propiedad": propiedad.tipo_de_propiedad,
        "estado_de_propiedad": propiedad.estado_de_propiedad
    });



    function actualizarPropiedad(event) {
        event.preventDefault();

      
            Swal.fire(
                {
                    icon: "success",
                    title: "La tarjeta ha sido actualizada con exito",
                    confirmButtonColor: "#2995C2",
                    iconColor: "#2995C2",
                })

        propiedadActual.precio = parseInt(propiedadActual.precio);
        propiedadActual.superficieCubierta = parseInt(propiedadActual.superficieCubierta);
        propiedadActual.superficieTotal = parseInt(propiedadActual.superficieTotal);
        propiedadActual.ambientes = parseInt(propiedadActual.ambientes);


        updateOne(propiedad.id, propiedadActual, urlBase, user.jwt)
        setActualizar(false)
        setrefresh(true)
          
    }













    return (
        <>
            <div>
                <div className="card-actualizar">
                    <form onSubmit={(e) => actualizarPropiedad(e)}>


                        <label>Precio</label>
                        <input type="number" name="Precio" placeholder="Precio" value={propiedadActual.precio} onChange={(e) => { setPropiedadActual(prev => ({ ...prev, precio: e.target.value })) }} required />


                        <label>Ubicacion</label>
                        <input type="text" name="date" placeholder="Ubicacion" minLength={"4"} value={propiedadActual.ubicacion} onChange={(e) => { setPropiedadActual(prev => ({ ...prev, ubicacion: e.target.value })) }} required />

                        <label>SuperficieTotal</label>
                        <input type="number" name="superficieTotal" placeholder="superficieTotal" value={propiedadActual.superficieTotal} onChange={(e) => { setPropiedadActual(prev => ({ ...prev, superficieTotal: e.target.value })) }} required />

                        <label>SuperficieCubierta</label>
                        <input type="number" name="superficieCubierta" placeholder="superficieCubierta" value={propiedadActual.superficieCubierta} onChange={(e) => { setPropiedadActual(prev => ({ ...prev, superficieCubierta: e.target.value })) }} required />

                        <label>Ambientes</label>
                        <input type="number" name="ambientes" placeholder="ambientes" value={propiedadActual.ambientes} onChange={(e) => { setPropiedadActual(prev => ({ ...prev, ambientes: e.target.value })) }} required />

                        <label>Tipo_de_propiedad</label>
                        <input type="text" name="tipo_de_propiedad" placeholder="tipo_de_propiedad" minLength={"4"} maxLength={"15"} value={propiedadActual.tipo_de_propiedad} onChange={(e) => { setPropiedadActual(prev => ({ ...prev, tipo_de_propiedad: e.target.value })) }} required />
                        <div className="input-radio">
                            <label>
                                <input type="radio" name="estado_de_propiedad" value={"En alquiler"} onChange={(e) => { setPropiedadActual(prev => ({ ...prev, estado_de_propiedad: e.target.value })) }} required />
                                En alquiler</label>
                            <label>
                                <input type="radio" name="estado_de_propiedad" value={"En venta"} onChange={(e) => { setPropiedadActual(prev => ({ ...prev, estado_de_propiedad: e.target.value })) }} required />
                                En venta </label>
                        </div>
                        <div className="container-btn-confirmar-actualizar">
                            <button type="submit" className='btn-actualizar' >Actualizar</button>
                        </div>

                    </form>
                    <div className="container-btn-confirmar-cancelar">
                        <button className="btn-eliminar" onClick={() => setActualizar(false)}>Cancelar</button>
                    </div>
                </div>
            </div>
        </>
    )


}


export default CardUpdate;