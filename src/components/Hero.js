import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import styles from './hero.module.css'


const hero = () => {
  return (
    
    <Box id="Inicio" className={styles.hero}>
      <Typography variant="h3" color="primary" marginRight="auto" marginLeft={"5vw"} marginTop={"6vh"} lineHeight={"1.5em"} >
        Alcance sus metas financieras
        <br/>
        Con nuestra experiencia
        <br/>
        Y enfoque perzonlizado
      </Typography>
      <Button  variant="outlined" sx={{
        marginRight:"auto", 
        marginLeft:"5vw", 
        marginTop:"2em", 
        borderRadius:"0",
        height:"4em",
        width:"16em",
        
        }}>
        Mas información
      </Button>
    </Box>
    
  )
}

export default hero