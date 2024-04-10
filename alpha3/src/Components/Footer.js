import "./FooterStyle.css";

const Footer =() =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>UP Darshan</h1>
                    <p>An Initiative by Uttar Pradesh Government</p>
                </div>
                <div>
                    <a href="https://www.facebook.com/share/CRzHGfDHWkFit767/?mibextid=qi2Omg"><i className="fa-brands fa-facebook-square"></i></a>
                    <a href="https://www.instagram.com/uttarpradeshtourism/"><i className="fa-brands fa-instagram-square"></i></a>
                    <a href="https://twitter.com/uptourismgov"><i className="fa-brands fa-twitter-square"></i></a>
                </div>
            </div>

            <div className="bottom">
                <div>
                    <h4>Policies</h4>
                    <a href="">Copyright Policy</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Disclaimer</a>
                    <a href="">Help</a>
                </div>
                <div>
                    <h4>About UP</h4>
                    <a href="/about">Know more about UP</a>
                    <a href="/about">History</a>
                    <a href="/about">Economy</a>
                    <a href="/about">People and Languages</a>
                </div>
                <div>
                    <h4>Book your travel</h4>
                    <a href="/service">Bus Tickets</a>
                    <a href="/service">Train and Flight Tickets</a>
                    <a href="/service">Hotels</a>
                </div>
                <div>
                    <h4>Contact Us</h4>
                    <a href="/contact">Email:avi26704@gmail.com</a>
                    <a href="/contact">Phone:+91-9336063710</a>
                </div>
            </div>
        </div>
    )
}

export default Footer