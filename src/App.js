import React from 'react';
import Navbar from './Components/navbar/Navbar';
import Footer from './Components/footer/Footer';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Projects from './Components/Projects/Projects';
import Banner from "./Components/Banner/Banner";
const App = () =>{
    return(
        <div>
            <Navbar/>
            <Banner/>
            <About/>
            <Services/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    )
}
export default App;