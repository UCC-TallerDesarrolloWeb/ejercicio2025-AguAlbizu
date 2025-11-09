import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const isloggedin = localStorage.getItem("isloggedin") === "true";

    const logout = () => {
        localStorage.removeItem("isloggedin");
        navigate("/");
    }

    return (
        <header>
            <h1>Gym</h1>
            <nav>
                <a href="/">Home</a>
                {
                    isloggedin ? (
                        <button onClick={logout}>Cerrar Sesion</button>
                    ):(
                        <a href="/login">Login</a>
                    )}
                <a href="/actividades">Actividades</a>
            </nav>
        </header>
    )
}

export default Header;