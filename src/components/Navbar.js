import React, { useState, useEffect, useRef } from 'react'
import { AppBar, Grid, Toolbar, Typography, Box, Button, useTheme, useMediaQuery } from '@mui/material'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DrawerComp from './DrawerComp';
import './Navbar.css'
const Navbar = ({ links }) => {
    const theme = useTheme();
    const [value, setValue] = useState(0);
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch);

    {/**
    como comparar el valor del scroll con el valor de los id de las secciones para que el tab se active
*/}
    useEffect(() => {
        const handleScroll = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const scrolled = (winScroll / height) * 100
            console.log(scrolled);
            if (scrolled < 20) {
                setValue(0)
            } else if (scrolled < 40) {
                setValue(1)
            } else if (scrolled < 80 && scrolled > 60) {
                setValue(2)
            } else if (scrolled < 90 && scrolled > 80) {
                setValue(3)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [value])

    return (
        <AppBar sx={{ backgroundColor: '#000', color: '#fff' }}>
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
                                    <Tab className='tab' key={index} label={link} href={`#${link}`} />))}
                            </Tabs>
                        </Grid>

                    </Grid>)}

            </Toolbar>
        </AppBar>
    )
}

export default Navbar