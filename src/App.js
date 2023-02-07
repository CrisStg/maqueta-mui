import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Component } from 'react';
import { Container } from '@mui/material';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
const linksArray = ["Inicio", "Quienes Somos", "Nuestros Servicios", "Contacto", "Acceso Clientes"];
class App extends Component{
  render(){
    return (
      <div sx={{width:'100vw'}}>
        <Navbar links={linksArray}/>
        <Hero />
        <AboutUs />
        <Services />
        <Contact />
        <Footer />
      </div>
    );
  }
}



export default App;
