import {useState} from "react";

function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleUser = (e) => {
        setUser(e.target.value)
    }


    const login = (e) => {
        e.preventDefault();
              alert(`tu usuario ${user} y contraseña ${password} estan ahora en un useState`)

    }

    
    return (
        <>
            <div className="container " id="loginContainer">
            <h1>Inicio de sesión</h1>
                <form>
                    <div className="form-group form">
                        <label for="usernameLoginInput">Usuario</label>
                        <input type="text" onChange={handleUser} className="form-control col-4" placeholder="introduce el usuario" id="usernameLoginInput" />
                    </div>
                    <div className="form-group form ">
                        <label for="passwordLoginInput">Constraseña</label>
                        <input type="password" onChange={handlePassword} className="form-control col-4" placeholder="contraseña" id="passwordLoginInput" />
                    </div>
                    <button className="btn btn-success " id="loginButton" onClick={login} >Iniciar sesión</button>
                  
                </form>
            </div>
        </>
    );
}
export default Login;