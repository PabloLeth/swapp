function Register() {

    const RegisterInput = {
        name: "",
        password: "",
        surname: "",
        email:"",   
    }

    const handlePassword = (e) => {
        RegisterInput.password = e.target.value
    }
    const handleUser = (e) => {
        RegisterInput.email = e.target.value
    }

    const handleName = (e) => {
        RegisterInput.name = e.target.value
    }
 const submit = (e) => {
     e.preventDefault();
 }

  
    return (
        <>
            <h1>Registrar usuario</h1>
           
            <div className="container" id="registerContainer">
                <form>
                    <div className="form-group mt-4">
                        <label for="usernameRegisterInput">nombre</label>
                        <input type="text" className="form-control" onChange={handleName} placeholder="nombre" id="usernameRegisterInput" />
                    </div>  
                    <div className="form-group mt-4">
                        <label for="surnameRegisterInput">Apellidos</label>
                        <input type="text" className="form-control" placeholder="Apellidos" id="surnameRegisterInput" />
                    </div>
                    <div className="form-group mt-4">
                        <label for="dniRegisterInput">Dni</label>
                        <input type="text" className="form-control" placeholder="nombre" id="dniRegisterInput" />
                    </div>
                    <div className="form-group mt-4">
                        <label for="passwordRegisterInput">Constraseña</label>
                        <input type="password" className="form-control" placeholder="contraseña" id="passwordRegisterInput" />
                    </div>
                    <div className="form-group mt-4">
                        <label for="emailRegisterInput">email</label>
                        <input type="text" className="form-control" placeholder="email" id="emailRegisterInput" />
                    </div>
                    <div className="form-group mt-4">
                        <label for="telephoneRegisterInput">telefono</label>
                        <input type="text" className="form-control" placeholder="nombre" id="telephoneRegisterInput" />
                    </div>
                    <button className="btn btn-info" onClick={submit} id="sendRegisterButton">Confirmar</button>
                </form>
            </div>
        </>
    );
}
export default Register;
