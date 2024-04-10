import "./DestinationStyles.css"
import DestinationData from "./DestinationData";
import imga from '../Assests/Taj2.jpg';
import imgaa from '../Assests/TajMahal.jpg';
import imgaaa from '../Assests/kashi1.jpg';
import imgaaaa from '../Assests/kashi2.jpeg';
const Destination =() =>{
    return(
        <div className="Destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to learn many new things.</p>
            <DestinationData heading="Taj Mahal, AGRA" 
            text="The Taj Mahal, a masterpiece of Mughal architecture, stands as a symbol of eternal love and beauty in Agra, India. Commissioned by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, it is a marvel of white marble adorned with intricate carvings and precious gemstones. Completed in 1653, its symmetrical design and majestic dome are renowned worldwide, drawing millions of visitors each year to admire its magnificence. As a UNESCO World Heritage Site, the Taj Mahal remains a testament to the enduring power of love and craftsmanship across the ages."
             img1={imga}
             img2={imgaa} 
             CName="first-des">  
            </DestinationData>

            <DestinationData
            heading="Kashi Vishwanath Temple, VARANASI"
            text="The Kashi Vishwanath Temple, located in Varanasi, India, is one of the holiest Hindu temples dedicated to Lord Shiva. Constructed in the ancient city of Kashi, it holds immense spiritual significance and attracts devotees from around the world. Believed to be the center of the universe by devout Hindus, the temple's sacred lingam (representation of Lord Shiva) is worshipped fervently. Its architecture reflects centuries of devotion, with intricate carvings and spires dominating its skyline. Despite numerous invasions and reconstructions, the temple stands as a beacon of faith, continuing to inspire reverence and devotion among its visitors."
            img1={imgaaa}
            img2={imgaaaa}
            CName="first-des_reverse"
            >
            </DestinationData>

        </div>
    )
}
export default Destination