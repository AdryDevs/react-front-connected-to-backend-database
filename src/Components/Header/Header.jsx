import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import './Header.scss';
// import { useSelector, useDispatch } from "react-redux";

// import { userData, userout } from "../../Containers/User/userSlice";


// const navigator = navigator 
// const userData = userData 
// const userout = userout
// const Navigator = Navigator
// const useNavigator = useNavigator



const Header = () => {

    const navigate = useNavigate();
    // const userReduxCredentials = useSelector(userData);
    // const dispatch = useDispatch();

    const logout = () => {
        // dispatch(userout({ credentials: {} }))
        return Navigate("./Home");
    }

    // if (userReduxCredentials?.credentials?.token !== undefined) {

    // return (
    //     <div className="headerDesign">
    //         <div>
    //             <div id="headerWord" className="linkPelis" onClick={() => navigate("/movies")}>Movies</div>
    //         </div>
    //         <div>
    //             <div id="headerWord" className="linkSeries" onClick={() => navigate("/series")}>Series</div>
    //         </div>
    //         <div>
    //             <div id="headerWord" className="linkSeries" onClick={() => navigate("/logout")}>Logout</div>
    //         </div>
    //     </div>
    // )
    // } else {
    return (
        <div className="headerDesign">
            <div>
                <div className="headerWord" onClick={() => navigate("/")}>Home</div>
            </div>
            <div>
                <div className="headerWord" onClick={() => navigate("/movies")}>Movies</div>
            </div>
            <div>
                <div className="headerWord" onClick={() => navigate("/series")}>Series</div>
            </div>
            <div>
                <div className="headerWord" onClick={() => navigate("/login")}>Login</div>
            </div>
            <div>
                <div className="headerWord" onClick={() => navigate("/register")}>Register</div>
            </div>
            <div>
                <div className="headerWord" onClick={() => navigate("/orders")}>Carrito</div>
            </div>

        </div>



    )
}






export default Header;