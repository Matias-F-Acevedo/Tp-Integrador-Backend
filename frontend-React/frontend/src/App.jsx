import Home from './components/home';
 import './App.css'
 import { createBrowserRouter, RouterProvider } from "react-router-dom"

 function App() {
     const router = createBrowserRouter([
        {
            path: '/',
             element: <Home/>,
            errorElement: <Error />,
         },
     ]);
     return (
            <RouterProvider>
                <RouterProvider router={router} />
            </RouterProvider>
    )
 }
export default App


// import './App.css'

// function App() {
//   return <h1>hola :)</h1>
// }

// export default App
