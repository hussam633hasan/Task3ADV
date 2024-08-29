
import Header from '../../components/Header/Header'
import Featured from '../../components/Featured/Featured'
import HMvideo from '../../components/HMvideo/HMvideo'
import Deal from '../../components/Deal/Deal'
import Property from '../../components/Property/Property'
import ContactUs from '../../components/ContactUs/ContactUs'

function Home() {
    return (
        <div>
            <Header />
            <Featured />
            <HMvideo />
            <Deal />
            <Property />
            <ContactUs />
        </div>
    )
}

export default Home