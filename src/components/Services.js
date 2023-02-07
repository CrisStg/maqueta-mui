import React from 'react'
import { Grid, Typography } from '@mui/material'
import FlipCard from './FlipCard'

const Services = () => {
  return (
    <Grid container>
        <Grid xs={12} >
            <Typography sx={{textAlign:"center" , fontSize:"3rem", paddingBlock:"1em"}}>Nuestros Servicios</Typography>
        </Grid>
        <Grid container sx={{backgroundColor:"#D9D9D9", color:"#000"}}>
        <Grid md={12} >
            <Typography sx={{fontSize:"1.75rem", padding:"3em 3.75em 3em 3.75em", textAlign:"center"}}>
            Ofrecemos una amplia gama de servicios para ayudar a nuestros clientes a alcanzar sus objetivos financieros. Nuestros servicios incluyen:
            </Typography>
        </Grid>
        <Grid md={3}><FlipCard /></Grid>
        <Grid md={3}><FlipCard /></Grid>
        <Grid md={3}><FlipCard /></Grid>
        <Grid md={3}><FlipCard /></Grid>
        </Grid>
    </Grid>
  )
}

export default Services