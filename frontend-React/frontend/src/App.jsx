
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// import Home from "./components/home";
// import Comprar from "./components/comprar-alquilar/Comprar";
// import Alquilar from "./components/comprar-alquilar/Alquilar";
// import Contacto from "./components/Contacto";
// import Login from "./components/Login";
// import Vender from "./components/Vender";

import Home from "./components/archivos temporales/Home"
import Alquilar from "./components/archivos temporales/Alquilar";
import Comprar from "./components/archivos temporales/Comprar";
import Contacto from "./components/archivos temporales/Contacto";
import Login from "./components/login/Login";
import Vender from "./components/archivos temporales/Vender";
import MisPropiedades from "./components/misPropiedades/MisPropiedades";
import { UserProvider } from "./context/UserContext";


function App() {


    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            // errorElement: <Error />,
        },
        {
            path: '/comprar',
            element: <Comprar />,
        },
        {
            path: '/vender',
            element: <Vender />,
        },
        {
            path: '/alquilar',
            element: <Alquilar />,
        },
        {
            path: '/login',
            element: <Login />,
        },
        {
            path: '/contacto',
            element: <Contacto />,
        },
        {
            path: '/mis-propiedades',
            element: <MisPropiedades />,
        },
        
    ]);



    return (
        <UserProvider>
            <RouterProvider router={router} />
        </UserProvider>
    )
}

export default App;