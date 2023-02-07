import React from 'react'
import { Grid, Typography } from '@mui/material'
import Form from './Form'

const Contact = () => {
  return (
    <Grid container>
        <Grid xs={12} >
            <Typography sx={{textAlign:"center" , fontSize:"3rem", paddingBlock:"1em"}}>Contáctanos</Typography>
        </Grid>
        <Grid md={6} sx={{backgroundColor:"#fff", color:"#000"}}>
            <Typography sx={{fontSize:"1.75rem", padding:"6em 3.75em 6em 3.75em"}}>
            ¿Tienes alguna pregunta o deseas programar una reunión con uno de nuestros administradores de fondos de inversión?
            </Typography>
        </Grid>
        <Grid md={6} sx={{backgroundColor:"#000", color:"#fff", display:'flex', alignContent:'center', justifyContent:'center'}}>
            <Form />
        </Grid>
    </Grid>
  )
}

export default Contact