function Login() {
    return (
        <>
            <h1>Inicio de sesión</h1>
            <div className="container" id="loginContainer">
                <form>
                    <div className="form-group">
                        <label for="usernameLoginInput">Usuario</label>
                        <input type="text" className="form-control" placeholder="introduce el usuario" id="usernameLoginInput" />
                    </div>
                    <div className="form-group">
                        <label for="passwordLoginInput">Constraseña</label>
                        <input type="password" className="form-control" placeholder="contraseña" id="passwordLoginInput" />
                    </div>
                    <button className="btn btn-success" id="loginButton">Iniciar sesión</button>
                    <button className="btn btn-info" id="registerButton">registrarse</button>
                </form>
            </div>
            <div className="container" id="registerContainer">
                <form>
                    <div className="form-group mt-4">
                        <label for="usernameRegisterInput">Usuario</label>
                        <input type="text" className="form-control" placeholder="nombre" id="usernameRegisterInput" />
                    </div>
                    <div className="form-group">
                        <label for="surnameRegisterInput">Apellidos</label>
                        <input type="text" className="form-control" placeholder="Apellidos" id="surnameRegisterInput" />
                    </div>
                    <div className="form-group">
                        <label for="passwordRegisterInput">Constraseña</label>
                        <input type="password" className="form-control" placeholder="contraseña" id="passwordRegisterInput" />
                    </div>
                    <div className="form-group">
                        <label for="emailRegisterInput">email</label>
                        <input type="text" className="form-control" placeholder="email" id="emailRegisterInput" />
                    </div>
                    <button className="btn btn-info" id="sendRegisterButton">Confirmar</button>
                </form>
            </div>
        </>
    );
}
export default Login;