import React from 'react'
import { Box, Typography, Button } from '@mui/material'


const hero = () => {
  return (
    
    <Box
        sx={{ height: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', 
        backgroundImage: 'url(https://www.marvinn.com/wp-content/uploads/2022/06/Slide_01-2-1.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '100vw' }}
      
      
    
    >
      <Typography variant="h3" color="primary">
        Welcome to my site
      </Typography>
      <Button variant="contained" color="secondary">
        Learn More
      </Button>
    </Box>
    
  )
}

export default hero