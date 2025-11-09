import "./Login.css"
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handlelogin = async (e) => {
        e.preventDefault();
        if(username=="admin" && password=="123"){
            console.log("login ok")
            navigate("/actividades")
        }else{
            console.log("login incorrecto")
        }
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handlelogin}>
                <h2>
                    Iniciar Sesion
                </h2>
                <input
                type="text"
                placeholder="Usuario"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
                />
                <input
                type="password"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                />
                <button type="submit">
                    Ingresar
                </button>
            </form>
        </div>
    );
}

export default Login;