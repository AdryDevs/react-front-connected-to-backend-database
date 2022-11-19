import React from "react";
import { Navigate, useNavigator } from "react-router-dom";
import './Header.scss';
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";

// import { userData, userout } from "../../Containers/User/userSlice";


const navigator = navigator 
const userData = userData 
const userout = userout
const Navigator = Navigator
const useNavigator = useNavigator



const Header = () => {

    const wander = useNavigator();
    const userReduxCredentials = useSelector(userData);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(userout({ credentials: {} }))
        return Navigate("./Home");
    }

    // if (userReduxCredentials?.credentials?.token !== undefined) {

        return (
            <div className="headerDesign">
                <div>
                    <div id="headerWord" className="linkPelis" onClick={() => wander("/movies")}>Movies</div>
                </div>
                <div>
                    <div id="headerWord" className="linkSeries" onClick={() => wander("/series")}>Series</div>
                </div>
                <div>
                    <div id="headerWord" className="linkSeries" onClick={() => wander("/logout")}>Logout</div>
                </div>
            </div>
        )
    // } else {
        return (
         <div className="headerDesign">
            <div>
                <div id="headerWord" className="linkLogin" onClick={()=>wander("/")}>Login</div>
            </div>
            <div>
                <div id="headerWord" className="linkRegister" onClick={()=>wander("/")}>Register</div>
            </div>
            <div>
                <div id="headerWord" className="linkCarrito">Carrito</div>
            </div>
         </div>
            

        
    )
}
// }





export default Header;