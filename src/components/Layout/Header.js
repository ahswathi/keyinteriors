import { AppBar, Button, Box, Divider, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Header.css'
const Header = () => {
  return (
    <>
        <Box sx={{/* marginBottom: 6, */}}>
            <AppBar sx={{bgcolor: '#060606',
                    padding:'0 60px',
               }}>
                <Toolbar sx={{ padding:'30px 0',
                        display: 'flex', 
                        alignItems: 'space-between',
                        justifyContent: 'space-between', }}>
                    <div>
                        <img 
                        src="logo.png"
                        alt="logo"
                        />
                    </div>
                        <Box sx={{
                            display: 'flex',
                            alignitems: 'center',
                            justifyContent: 'center',
                        }}>
                            <div>
                                <ul className='nav-menu'>
                                    <li>
                                        <Link to={'/'}>Home</Link>
                                    </li>
                                    <li>
                                        <Link to={'/about'}>About Us</Link>
                                    </li>
                                    <li>
                                        <Link to={'/services'}>Services</Link>
                                    </li>
                                    <li>
                                        <Link to={'/contact'}>Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <Button variant="contained"
                                sx={{
                                width:'186px',
                                height: '48px',
                                color: '#090909',
                                fontSize: '16px',
                                fontWeight: 700,
                                borderRadius: 'none',
                                '&.MuiButtonBase-root':{
                                textTransform:'none',
                                backgroundColor:'#FFC12B',
                                borderRadius: '0px',
                                },
                                }}>Subscribe</Button>
                            </div>
                    </Box>

                </Toolbar> 
                <Divider  sx={{ borderColor : '#FFFFFF', margin: '10px 20px 30px 20px',}}/>
            </AppBar>
            <Box sx={{ p:6 }}>
                <Toolbar />
            </Box>
            
        </Box>

    </>
  )
}

export default Header