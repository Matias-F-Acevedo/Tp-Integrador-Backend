import React, { useState, useEffect } from 'react';
import "./comprar.css"
import { Link, useNavigate } from 'react-router-dom';

function Card({ propiedad, index, button}) {
  const navigate = useNavigate()
  const propietarioId = propiedad.dueño;
  return (

    <div key={index} className="tarjeta">
      <div className='div-imagen'>
        <img className='imagen' src="https://imgar.zonapropcdn.com/avisos/1/00/51/43/07/00/720x532/1861159092.jpg" alt="" />
      </div>
      <section className='seccion-estado-ubicacion'>
        <p>{propiedad.estado_de_propiedad} en {propiedad.ubicacion}</p>
      </section>
      <p className='precio'>US$ {propiedad.precio}</p>
      <section>
        <article className='seccion-superficie'>{propiedad.superficieTotal} <span className='especificacion-m2'>m2 totales</span></article>
        <article className='seccion-superficie'>{propiedad.superficieCubierta} <span className='especificacion-m2'>m2 cubiertos</span></article>
      </section>
      <section >
        <p className='seccion-ambientes-tipo'>{propiedad.ambientes} <span className='especificacion-m2'>ambientes</span></p>
        <p className='seccion-ambientes-tipo'><span className='especificacion-m2'>Tipo:</span > {propiedad.tipo_de_propiedad}</p>
      </section>
       {button?
        <button className='action' onClick={() => {navigate("/Comprar-form", {replace: true, state:{propietarioId} })}}>Datos del vendedor</button>
      :
      <></>}
    </div>

  );
}

export default Card;