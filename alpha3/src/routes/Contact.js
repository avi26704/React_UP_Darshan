import Navbar from '../Components/Navbar'
import MainDes from '../Components/MainDes';
import imgaa from '../Assests/Charbagh.jpg'
import Footer from '../Components/Footer';
import ContactForm from '../Components/ContactForm';
function Contact(){
    return(
    <>
    <Navbar></Navbar>
    <MainDes
    cName="hero_mid"
    heroImg={imgaa}
    title="Contact Us"
    para="Get in touch and We are Ready to help you Out!!"
    />
    <ContactForm></ContactForm>
    <Footer></Footer>
    </>
    )
}
export default Contact;