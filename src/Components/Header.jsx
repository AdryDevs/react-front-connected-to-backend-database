import React from "react";
import { useNavigator} from "react-router-dom";
import './Header.css';

// Pelis
// Series
// Login
// Register
// carrito


const Header = () => {

    const wander = useNavigator();

    return (
        <div className="headerDesign">
            <div>
                <div className="linkPelis" onClick={()=>wander("/")}>Peliculas</div>
            </div>
            <div>
                <div className="linkSeries" onClick={()=>wander("/")}>Series</div>
            </div>
            <div>
                <div className="linkLogin" onClick={()=>wander("/")}>Login</div>
            </div>
            <div>
                <div className="linkRegister" onClick={()=>wander("/")}>Register</div>
            </div>
            <div>
                <div className="linkCarrito">Carrito</div>
            </div>
        </div>
    )
}

export default Header;