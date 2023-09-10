// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// function ComprarForm() {
//   const [propietario, setPropietario] = useState();
//   const location = useLocation();
//  console.log(location)

//   useEffect(() => {
//     async function fetchDataUsuario() {
//       try {
//         if (!location.state.Id) {
//           // Si propietarioId no está definido, puedes manejarlo de manera apropiada o mostrar un mensaje de error.
//           console.error('propietarioId no está definido.');
//           return;
//         }

//         const response = await fetch(`http://localhost:3000/api/usuario/${location.state.Id}`);
//         if (!response.ok) {
//           throw new Error(`Network response was not ok: ${response.status}`);
//         }
//         const data = await response.json();
//         setPropietario(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     fetchDataUsuario();
//   }, [location.state.Id]);

//   if (!propietario) {
//     return <div>Loading...</div>; 
//   }

//   return (
//     <div>
//      <h2>Datos del Vendedor</h2>
//         <div>
//           <p>Nombre: {propietario.nombre}</p>
//           <p>Apellido: {propietario.apellido}</p>
//           <p>Email: {propietario.email}</p>
//         </div>
//     </div>
//   );
// }

// export default ComprarForm;



