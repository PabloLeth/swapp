import { useContext,useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import {Redirect} from 'react-router-dom';
import {useAuth} from '../context/auth'

function Login() {
    // const {isloged, setIsloged} = useContext(GlobalContext);
    const {isloged, setIsloged} = useState(false);
const {setAuthTokens} = useAuth();

    const loginInput = {
        username: "", 
        password: ""
    }


    const handlePassword = (e) => {
        loginInput.password = e.target.value
    }
    const handleUser = (e) => {
        loginInput.username = e.target.value
    }

    const URLLOGIN = "http://localhost/symfonyswapp/public/index.php/login";

    const login = (e) => {
        // funtcion to log into Swapp
        e.preventDefault();
       // alert(`tu usuario ${loginInput.username} y contraseña ${loginInput.password} `);

        fetch(URLLOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInput)
        }).then(response => response.json())
            .then(data => {

                if (data.token){
                    setAuthTokens(data.token)
                   
                     setIsloged(true);
                }
              
                console.log(data);
               
            }).catch(error => console.log("ha habido un error:", error));

    }
    if (isloged){
         return <Redirect to="/"/>
    }

    return (
        <>
            <div className="loginback">


                <div className="loginContainer" id="loginContainer">
                    <h1>Inicio de sesión</h1>
                    <form>
                        <div className="form-group form ">
                            <label htmlFor="emailLoginInput">Email</label>
                            <input type="text" onChange={handleUser} className="form-control col-6 " placeholder="introduce el Email" id="emailLoginInput" />
                        </div>
                        <div className="form-group form ">
                            <label htmlfor="passwordLoginInput">Constraseña</label>
                            <input type="password" onChange={handlePassword} className="form-control col-6" placeholder="contraseña" id="passwordLoginInput" />
                        </div>
                        <button className="btn btn-success " id="loginButton" onClick={login} >Iniciar sesión</button>

                    </form>
                </div>
            </div>
        </>
    );
}
export default Login;