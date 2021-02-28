

function Login() {

    const loginInput = {
        email: "",
        password: ""
    }

    const handlePassword = (e) => {
        loginInput.password = e.target.value
    }
    const handleUser = (e) => {
        loginInput.email = e.target.value
    }


    const login = (e) => {
        // funtcion to log into website
        e.preventDefault();
              alert(`tu usuario ${loginInput.email} y contraseña ${loginInput.password} `)

    }

    
    return (
        <>
            <div className="loginContainer" id="loginContainer">
            <h1>Inicio de sesión</h1>
                <form>
                    <div className="form-group form ">
                        <label for="usernameLoginInput">Usuario</label>
                        <input type="text" onChange={handleUser} className="form-control col-6 " placeholder="introduce el usuario" id="usernameLoginInput" />
                    </div>
                    <div className="form-group form ">
                        <label for="passwordLoginInput">Constraseña</label>
                        <input type="password" onChange={handlePassword} className="form-control col-6" placeholder="contraseña" id="passwordLoginInput" />
                    </div>
                    <button className="btn btn-success " id="loginButton" onClick={login} >Iniciar sesión</button>
                  
                </form>
            </div>
        </>
    );
}
export default Login;