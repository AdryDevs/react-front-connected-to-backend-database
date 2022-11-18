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

    return(
        <div classname="headerDesign">
            <div className="linkDesign" onClick={()=>wander("/")}>Peliculas</div>
            <div className="linkDesign" onClick={()=>wander("/")}>Series</div>
            <div className="linkDesign" onClick={()=>wander("/")}>Login</div>
            <div className="linkDesign" onClick={()=>wander("/")}>Register</div>
            <div className="linkDesign" onClick={()=>wander("/")}>Carrito</div>
        </div>
    )
}

export default Header;