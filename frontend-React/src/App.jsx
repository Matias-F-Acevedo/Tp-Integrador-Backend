
import { BrowserRouter, createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom"
import Home from "./components/home/Home";
import Alquilar from "./components/comprar-alquilar/Alquilar";
import Comprar from "./components/comprar-alquilar/Comprar";
import Contacto from "./components/contacto/Contacto";
import Login from "./components/login/Login";
import MisPropiedades from "./components/misPropiedades/MisPropiedades";
import { UserProvider } from "./context/UserContext";
import ProtectedRouter from "./components/utils/ProtectedRoute";
import ComprarForm from "./components/comprar-alquilar/Comprar-form";


function App() {
    return (

        <UserProvider>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/comprar" element={<Comprar />} />
                    <Route path="/alquilar" element={<Alquilar />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/comprar-form" element={<ComprarForm />} />
                    <Route element={<ProtectedRouter redirectPath="/login" />}>
                        <Route path="/mis-propiedades" element={<MisPropiedades />} />
                    </Route>

                </Routes>

            </BrowserRouter>
        </UserProvider>
    )
}

export default App;