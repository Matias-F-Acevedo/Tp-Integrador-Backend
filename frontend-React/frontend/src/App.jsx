

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home";
import Alquilar from "./components/alquilar";
import Comprar from "./components/comprar";
import Contacto from "./components/Contacto";
import Login from "./components/Login";
import Vender from "./components/vender";

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