import { useContext } from "react"

import { Link } from "react-router-dom"

import { Context } from "../../context/Context"

import "./topbar.css"

export default function Topbar() {
    const { user, dispatch } = useContext(Context)

    const PF = "https://tr-mern-blog-server.herokuapp.com/images/"

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }

    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>

            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>
                </ul>
            </div>

            <div className="topRight">
                {user ? (
                    <>
                        <ul className="topList">                    
                            <li 
                                className="topListItem"
                                onClick={handleLogout} >
                                {user && "LOGOUT"}
                            </li>
                        </ul>

                        <Link to="/settings">
                            <img
                                className="topImg"
                                src={
                                    user.profilePic ?
                                        PF + user.profilePic :
                                        "https://t4.ftcdn.net/jpg/03/59/58/91/360_F_359589186_JDLl8dIWoBNf1iqEkHxhUeeOulx0wOC5.jpg"
                                }
                                alt="" />
                        </Link>  
                    </>                                     
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">LOGIN</Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">REGISTER</Link>
                        </li>  
                    </ul>                    
                )}                

                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
