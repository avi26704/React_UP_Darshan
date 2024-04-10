import { Component } from "react";
import "./DestinationStyles.css"
import imga from '../Assests/Rumi.jpg';
import imgaa from '../Assests/TajMahal.jpg';
class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.CName}>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className="image">
                    <img src={this.props.img1} alt="image" />
                    <img src={this.props.img2} alt="2nd image" />
                </div>
            </div>
        )
    }
}
export default DestinationData