import React from 'react'
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Divider, Typography, IconButton, ListItemButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react'
const DrawerComp = ({ links }) => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Drawer PaperProps={{
                sx: { backgroundColor: '#000' }
            }} anchor='right' open={open} onClose={() => setOpen(false)} >
                <List>
                    {links.map((link, index) => (
                        <ListItemButton  onClick={() => setOpen(false)} href={`#${link}`}>
                            <ListItemIcon>
                                <ListItemText sx={{ color: '#fff' }}>
                                    {link}
                                </ListItemText>
                            </ListItemIcon>
                            
                        </ListItemButton>))}

                </List>
            </Drawer>
            <IconButton sx={{ color: '#fff', marginLeft: 'auto' }} onClick={() => setOpen(true)}>
                <MenuIcon />
            </IconButton>
        </>
    )
}

export default DrawerComp