import React, { useNavigate } from "react-router-dom";


import './Header.css';

// Pelis
// Series
// Login
// Register
// carrito


const Header = () => {

    const navigate = useNavigate();

    return (
        <div className="headerDesign">
            <div>
                <div className="linkPelis" onClick={()=>navigate("/")}>Peliculas</div>
            </div>
            <div>
                <div className="linkSeries" onClick={()=>navigate("/")}>Series</div>
            </div>
            <div>
                <div className="linkLogin" onClick={()=>navigate("/login")}>Login</div>
            </div>
            <div>
                <div className="linkRegister" onClick={()=>navigate("/")}>Register</div>
            </div>
            <div>
                <div className="linkCarrito">Carrito</div>
            </div>
        </div>
    )
}

export default Header;