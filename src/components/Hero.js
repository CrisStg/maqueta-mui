import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { alpha } from "@mui/material";


const hero = () => {
  return (
    
    <Box
        sx={{ 
        height: '90vh',
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundImage: 'url(https://www.marvinn.com/wp-content/uploads/2022/06/Slide_01-2-1.png)', 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover',
        backgroundPositionY: 'center',
        backgroundColor: alpha(color.black, 0.5)
      }}
      
      
    
    >
      <Typography variant="h3" color="primary" marginRight="auto" marginLeft={"5vw"} >
        Alcance sus metas financieras
        <br/>
        Con nuestra experiencia
        <br/>
        Y enfoque perzonlizado
      </Typography>
      <Button  variant="outlined" sx={{marginRight:"auto", marginLeft:"5vw"}}>
        Learn More
      </Button>
    </Box>
    
  )
}

export default hero