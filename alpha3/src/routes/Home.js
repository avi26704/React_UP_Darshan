import MainDes from '../Components/MainDes';
import Navbar from '../Components/Navbar';
import imga from '../Assests/Rumi.jpg';
import Destination from '../Components/Destination';
import Trip from '../Components/Trip';
import Footer from '../Components/Footer';
import Service from '../routes/Service';

function Home(){
    return(
    <>
    <Navbar></Navbar>
    <MainDes
    cName="hero"
    heroImg={imga}
    title="Welcome to UP Darshan"
    para="Visit and Explore the great beauty and diversity of Uttar Pradesh"
    btnText="Plan Your Trip Now !"
    where="/service"
    btnClass="show"
    />
    <Destination></Destination>
    <Trip></Trip>
    <Footer></Footer>
    </>
    )
}
export default Home;