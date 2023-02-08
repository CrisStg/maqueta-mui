import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { Link } from '@mui/material'
import './Footer.css'

const Footer = () => {
  return (
    
    <Box  sx={{backgroundColor:'#000', minHeight:'22.05em', color:'#fff', alignItems:'center', display:'flex'}}>
      <Container>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography sx={{
            textAlign:'left', 
            fontSize:'1rem', 
            fontWeight:'light', 
            marginLeft:'3rem',
            listStyle:'none',
            marginTop:'2rem'}}>Menú
            <ul>
              <li><Link className='Link' href='#Inicio'>Home</Link></li>
              <li><Link className='Link' href='#Quienes Somos'>Quienes Somos</Link></li>
              <li><Link className='Link' href='#Nuestros Servicios'>Nuestros Servicios</Link></li>
              <li><Link className='Link' href='#Contacto'>Contacto</Link></li>
            </ul>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{
            textAlign:'left', 
            fontSize:'1rem', 
            fontWeight:'light', 
            marginLeft:'3rem',
            listStyle:'none',
            marginTop:'2rem'}}>Dirección
            <ul >
              <li>Av ejemplo #333</li>
            </ul>
          </Typography>
          <Typography sx={{
            textAlign:'left', 
            fontSize:'1rem', 
            fontWeight:'light', 
            marginLeft:'3rem',
            listStyle:'none',
            marginTop:'2rem'}}>Teléfono
            <ul >
              <li>+56 2 222 222</li>
            </ul>
          </Typography>
        </Grid>
      </Grid>
      <hr></hr>
      <Typography sx={{
        marginLeft:'3rem'
      }}>© 2023 Powered by Marvinn. All rights reserved.</Typography>
      </Container>
    </Box>
  )
}

export default Footer