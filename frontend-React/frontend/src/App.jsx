

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/home";
import Comprar from "./components/comprar-alquilar/Comprar";
import Alquilar from "./components/comprar-alquilar/Alquilar";
import Contacto from "./components/Contacto";
import Login from "./components/Login";
import Vender from "./components/Vender";

function App() {


    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home/>,
            // errorElement: <Error />,
        },
        {
            path: '/comprar',
            element: <Comprar/>,
        },
        {
            path: '/vender',
            element: <Vender/>,
        },
        {
            path: '/alquilar',
            element: <Alquilar/>,
        },
        {
            path: '/login',
            element: <Login/>,
        },
        {
            path: '/contacto',
            element: <Contacto/>,
        },

    ]);



    return (
            
                <RouterProvider router={router} />
        
    )
}

export default App;