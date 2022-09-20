import "./sidebar.css"

export default function Sidebar() {

    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>

                <img
                    className="sidebarImg"
                    src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="" />

                <p>
                    Studied in the University of Piraeus,
                    in the Department of Digital Systems.
                    Coding enjoyer and chess enthusiast,
                    always ready to face new challenges
                </p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW ME</span>
                
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-pinterest-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
