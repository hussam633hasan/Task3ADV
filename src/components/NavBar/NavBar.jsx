import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMap, faCalendar, faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faSquareInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
    const [ShowSidebar, setShowSidebar] = useState(true)
    const [Top, setTop] = useState(false)
    function HandlShowSidebar() {

        setShowSidebar(!ShowSidebar)
    }
    const changeTop = () => {
        if (window.scrollY >= 5) {
            setTop(true)
        } else {
            setTop(false)
        }
    }
    window.addEventListener('scroll', changeTop)
    return (
        <nav>
            <div className='Nav-1'>
                <div className="contact">
                    <p><FontAwesomeIcon icon={faEnvelope} style={{ color: "#f35525", marginRight: 10, }} />info@company.com</p>
                    <p><FontAwesomeIcon icon={faMap} style={{ color: "#f35525", marginRight: 10 }} />Sunny isles Beach,FL 33160</p>
                </div>
                <div className="socialicon">
                    <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} style={{ color: "#cdcdcd", height: 25, marginRight: 20, }} /></a>
                    <a href="https://www.instagram.com"><FontAwesomeIcon icon={faSquareInstagram} style={{ color: "#cdcdcd", height: 25, marginRight: 20 }} /></a>
                    <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} style={{ color: "#cdcdcd", height: 25, marginRight: 20 }} /></a>
                    <a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} style={{ color: "#cdcdcd", height: 25, marginRight: 20 }} /></a>
                </div>
            </div>
            <div className={Top ? "top" : "Nav-2"}>
            <div className={ShowSidebar ? "Nav-2" : "sidebar"}>
                <div className="logo">
                    <a><h1>Villa</h1></a>
                </div>
                <div className={ShowSidebar ? "menu" : "menu-sidebar"}>
                    <Link to="/Task2/">Home</Link>
                    <Link to={"/Pproperties"}>Properties</Link>
                    <Link to={"/PropertyDetails"}>property Details</Link>
                    <Link to={"/ContactUs "}>Contact Us</Link>
                    <a className="HH"><FontAwesomeIcon className="calendericon" icon={faCalendar} style={{ color: "#ffffff", marginRight: 25, backgroundColor: "#f35525", height: 18, width: 30 }} />Schedule a visit</a>
                </div>
                <button onClick={HandlShowSidebar} className={ShowSidebar ? "icon-bars" : "Xmark-icon"}>
                {ShowSidebar ? <FontAwesomeIcon icon={faBarsStaggered} flip="horizontal" size="2xl" style={{ color: "#f32525", }} /> : <FontAwesomeIcon icon={faXmark} size="2xl" style={{ color: "#f32525", }} />}
            </button>
            </div>
            </div>
        </nav>
    )
}

export default NavBar