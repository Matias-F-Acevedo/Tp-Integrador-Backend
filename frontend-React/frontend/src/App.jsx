import React from 'react';
import ComprarPropiedad from './componentes/comprar';
import AlquilarPropiedad from './componentes/alquiler';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Home from './componentes/home';

function App() {



  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>,
      exact: true,
    },
      {
          path: '/alquiler',
          element: <AlquilarPropiedad/>,
      },
      {
          path: '/comprar',
          element: <ComprarPropiedad/>,
      },

  ]);



  return (
              <RouterProvider router={router} />
  )
}

export default App;