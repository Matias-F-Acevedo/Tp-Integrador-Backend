import {useState } from "react";

import appFirebase from "../firebase/config";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword,GoogleAuthProvider,signInWithRedirect } from "firebase/auth";

const auth = getAuth(appFirebase)

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');


function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submit = async () => {
    //    const hola =  await createUserWithEmailAndPassword(auth,email,password)
    //    console.log(hola);
    signInWithRedirect(auth,provider)
    }


    return (
        <div>
            <div id="form">
                <div className="form-group">
                    <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" placeholder="Email" required />
                </div>
                <div className="form-group">
                    <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder="Password" required />
                </div>
                <button onClick={submit}>signup</button>
            </div>
        </div>
    )
}

export default Login;