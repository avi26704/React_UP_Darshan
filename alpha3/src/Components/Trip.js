import "./TripStyles.css";
import TripData from "./TripData";
import imga from '../Assests/Rumi.jpg';
import imgaa from '../Assests/fatehpur.jpg';
import imgaaa from '../Assests/Prem Mandir.jpg';
import imgaaaa from '../Assests/TajMahal.jpg';
function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique locations</p>
            <div className="tripCard">
                <TripData
                img={imga}
                heading="LUCKNOW"
                text="Lucknow, the capital city of Uttar Pradesh, India, is renowned for its rich cultural heritage, exquisite Mughal architecture, delectable cuisine, and the graceful dance form of Kathak. It is a vibrant cultural hub."></TripData>
                
                <TripData
                img={imgaaa}
                heading="MATHURA"
                text="Mathura, located in Uttar Pradesh, India, is revered as the birthplace of Lord Krishna, a central figure in Hindu mythology. It is a pilgrimage site dotted with temples and celebrates vibrant festivals."
                ></TripData>

                <TripData
                img={imgaa}
                heading="FATEHPUR SIKRI"
                text="Fatehpur Sikri, a UNESCO World Heritage Site in Uttar Pradesh, India, is a historic city built by Emperor Akbar in the 16th century. It showcases stunning Mughal architecture and serves as a testament to cultural grandeur."
                ></TripData>
            </div>
        </div>
    )
}
export default Trip