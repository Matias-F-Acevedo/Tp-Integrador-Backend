import "./misPropiedades.css"
import { UserContext } from "../../context/UserContext";
import { addOne } from "../../service/functionsHTTP";
import { useContext, useState } from "react";
import Swal from "sweetalert2";

const urlBase = "http://localhost:3000/api/propiedad"

function CardCreate({ setcrear , refresh, setrefresh, }) {

    const { user } = useContext(UserContext);

    const [propiedadActual, setPropiedadActual] = useState({
        "dueño": user.sub,
        "precio": "",
        "ubicacion": "",
        "superficieTotal": "",
        "superficieCubierta": "",
        "ambientes": "",
        "tipo_de_propiedad": "",
        "estado_de_propiedad": "",
    });



    


  function confirmCreateCard(event) {
        event.preventDefault();

            Swal.fire(
                {
                    icon: "success",
                    title: "Tarjeta creada con Exito",
                    confirmButtonColor: "#2995C2",
                    iconColor: "#2995C2",
                })

        propiedadActual.precio = parseInt(propiedadActual.precio);
        propiedadActual.superficieCubierta = parseInt(propiedadActual.superficieCubierta);
        propiedadActual.superficieTotal = parseInt(propiedadActual.superficieTotal);
        propiedadActual.ambientes = parseInt(propiedadActual.ambientes);


        addOne(propiedadActual, urlBase, user.jwt)

        setcrear(false)
        setrefresh(true)

        }
    
 







    return (
        <>
            <div>
                <div className="card-actualizar card-create">
                    <form onSubmit={(e) => confirmCreateCard(e)}>
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
                        <div className="container-btn-confirmar-crear">
                            <button className='btn-confirmar-crear' type="submit">Crear</button>
                        </div>
                    </form>

                    <div className="container-btn-confirmar-cancelar">
                        <button className="btn-eliminar" onClick={() => setcrear(false)}>Cancelar</button>
                        </div>

                </div>
            </div>
        </>
    )


}


export default CardCreate;

