import React, { useState } from 'react'
import { AppBar, Grid, Toolbar, Typography, Box, Button, useTheme, useMediaQuery } from '@mui/material'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DrawerComp from './DrawerComp';

const Navbar = ({ links }) => {
    const theme = useTheme();
    const [value, setValue] = useState(0);
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch);
    return (
        <AppBar sx={{ backgroundColor: '#000', color:'#fff' }}>
            <Toolbar>
                {isMatch ? (
                    <>
                        <DrawerComp links={links} />
                    </>
                ) : (
                    <Grid sx={{ placeItems: 'center' }} container>
                        <Grid item xs={2}>
                            <Typography variant="h6">Logo</Typography>
                        </Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={6}>
                            <Tabs
                                indicatorColor='secondary'
                                textColor='inherit'
                                value={value}
                                onChange={(e, val) => setValue(val)}>

                                {links.map((link, index) => (
                                    <Tab key={index} label={link} />))}
                            </Tabs>
                        </Grid>
                        
                    </Grid>)}

            </Toolbar>
        </AppBar>
    )
}

export default Navbar