function Register() {
    return (
        <>
            <h1>Registro</h1>
           
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
export default Register;