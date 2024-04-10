import "./TripStyles.css";
import TripData from "./TripData";
import imga from '../Assests/Bus.jpg';
import imgaa from '../Assests/flight.jpg';
import imgaaa from '../Assests/hotel.jpg';
function Trip2(){
    return(
        <div className="trip">
            <h1>Book Your Travel</h1>
            <p>Travel and Enjoy exploring the beauty of this world!!</p>
            <div className="tripCard">
                <TripData
                img={imga}
                heading="Govt. Bus Tickets"
                link="https://www.onlineupsrtc.co.in/#/home"
                buttonName="Book your tickets now!!"
                text=""></TripData>
                
                <TripData
                img={imgaa}
                heading="Train and Flight Tickets"
                link="https://www.makemytrip.com/"
                buttonName="Book your tickets now!!"
                text=""></TripData>

                <TripData
                img={imgaaa}
                heading="Hotel Bookings"
                link="https://www.booking.com/index.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4Ar-x1rAGwAIB0gIkM2ZmODA1MGYtOWZlOS00OWVmLWE5ZGQtYmMzNDM3N2U0OTkx2AIF4AIB&sid=b9a82608758264129b763162ef368f7e"
                buttonName="Book your stay now!!"
                text=""></TripData>
            </div>
        </div>
    )
}
export default Trip2