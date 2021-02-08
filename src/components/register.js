function Register() {

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
            <h1>Registrar</h1>
           
            <div className="container" id="registerContainer">
                <form>
                    <div className="form-group mt-4">
                        <label for="usernameRegisterInput">nombre</label>
                        <input type="text" className="form-control" placeholder="nombre" id="usernameRegisterInput" />
                    </div>  
                    <div className="form-group">
                        <label for="surnameRegisterInput">Apellidos</label>
                        <input type="text" className="form-control" placeholder="Apellidos" id="surnameRegisterInput" />
                    </div>
                    <div className="form-group mt-4">
                        <label for="dniRegisterInput">Dni</label>
                        <input type="text" className="form-control" placeholder="nombre" id="dniRegisterInput" />
                    </div>
                    <div className="form-group">
                        <label for="passwordRegisterInput">Constraseña</label>
                        <input type="password" className="form-control" placeholder="contraseña" id="passwordRegisterInput" />
                    </div>
                    <div className="form-group">
                        <label for="emailRegisterInput">email</label>
                        <input type="text" className="form-control" placeholder="email" id="emailRegisterInput" />
                    </div>
                    <div className="form-group mt-4">
                        <label for="telephoneRegisterInput">telefono</label>
                        <input type="text" className="form-control" placeholder="nombre" id="telephoneRegisterInput" />
                    </div>
                    <button className="btn btn-info" id="sendRegisterButton">Confirmar</button>
                </form>
            </div>
        </>
    );
}
export default Register;
