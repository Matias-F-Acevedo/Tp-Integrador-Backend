import './App.css'
import Login from './login/Login'



// import appFirebase from "../firebase/config";
// import { getAuth, onAuthStateChanged } from 'firebase/auth'


// const auth = getAuth(appFirebase)



function App() {
  // const [usuario, setUsuario] = useState(null);

  // onAuthStateChanged(auth, (usuarioFirebase) => {
  //   if (usuarioFirebase) {
  //     setUsuario(usuarioFirebase)
  //   }else{
  //     setUsuario(null)
  //   }
  // })



  return (
    <div>
      <Login/>
    </div>
  )
}

export default App