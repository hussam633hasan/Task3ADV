
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './Pages/Home/Home'
import Footer from './components/Footer/Footer'
import Pproperties from './Pages/Pproperties/Pproperties'
import PropertyDetails from './Pages/PropertyDetails/PropertyDetails'
import ContactUs from './Pages/ContactUs/ContactUs'
import { Route, Routes } from 'react-router-dom'



function App() {


  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/Task2/" element={<Home />} />
        <Route path="/Pproperties" element={<Pproperties />} />
        <Route path="/PropertyDetails" element={<PropertyDetails />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
