

function Login() {

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
        // funtcion to log into website
        e.preventDefault();
        alert(`tu usuario ${loginInput.username} y contraseña ${loginInput.password} `);
        
        fetch( URLLOGIN , {
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(loginInput)
          }).then(response => response.json())
          .then(data => {
            //  setToken = data.token;
          console.log(data);
          });

    }

    
    return (
        <>
        <div className= "loginback">

       
            <div className="loginContainer" id="loginContainer">
            <h1>Inicio de sesión</h1>
                <form>
                    <div className="form-group form ">
                        <label for="emailLoginInput">Email</label>
                        <input type="text" onChange={handleUser} className="form-control col-6 " placeholder="introduce el Email" id="emailLoginInput" />
                    </div>
                    <div className="form-group form ">
                        <label for="passwordLoginInput">Constraseña</label>
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