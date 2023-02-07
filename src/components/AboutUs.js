import { Grid, Typography } from '@mui/material'
import React from 'react'

const AboutUs = () => {
  return (
    <Grid container>
        <Grid xs={12} >
            <Typography sx={{textAlign:"center" , fontSize:"3rem", paddingBlock:"1em"}}>¿Quienes Somos?</Typography>
        </Grid>
        <Grid md={6} sx={{backgroundColor:"#000", color:"#fff"}}>
            <Typography sx={{fontSize:"1.75rem", padding:"3em 3.75em 3em 3.75em"}}>
            Somos un equipo de expertos en el campo de la inversión, con más de xx años de experiencia en el mercado chileno. Nuestra filosofía se basa en la diversificación y la gestión de riesgos para maximizar el rendimiento de nuestros clientes. Contamos con un equipo altamente calificado y dedicado, que se esfuerza por brindar un servicio excepcional a nuestros clientes.
            </Typography>
        </Grid>
        <Grid md={6} sx={{backgroundImage: 'url(https://crisstg.github.io/demo-maqueta/img/img-1.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>

        </Grid>
    </Grid>
  )
}

export default AboutUs