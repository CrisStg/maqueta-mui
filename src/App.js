import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Component } from 'react';
import { Container } from '@mui/material';
const linksArray = ["Inicio", "Quienes Somos", "Nuestros Servicios", "Contacto", "Acceso Clientes"];
class App extends Component{
  render(){
    return (
      <div sx={{width:'100vw'}}>
        <Navbar links={linksArray}/>
        <Hero />
      </div>
    );
  }
}



export default App;
