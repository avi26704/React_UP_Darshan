import { Component } from "react";
import "./NavStyle.css";
import {Link} from "react-router-dom";

class Navbar extends Component{
    state={clicled:false};
    handleClick=()=>{this.setState({clicked:!this.state.clicked})}
    render(){
        return(
            <nav className="Navbar">
                <h1 className="title">UP Darshan</h1>
                <div className="menuIcon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "Navitems active":"Navitems"}>
                    <li>
                        <Link to="/" className="navlinks"><i className="fa-solid fa-house-user"></i>Home</Link>
                    </li>
                    <li>
                       <Link to="/about" className="navlinks"><i className="fa-solid fa-circle-info"></i>About</Link>
                    </li>
                    <li>
                        <Link to="/service" className="navlinks"><i className="fa-solid fa-briefcase"></i>Services</Link>
                    </li>
                    <li>
                        <Link to="contact" className="navlinks"><i className="fa-solid fa-address-book"></i>Contact Us</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}export default Navbar