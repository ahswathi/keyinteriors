import { Box, Divider, Typography, TextField, Button  } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/FooterStyles.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
      <>
       <Box sx={{ bgcolor: '#060606', }}>
          <Box sx={{ bgcolor: '#060606', 
                  display: 'flex',
                  alignItems: 'space-around',
                  justifyContent : 'space-around',
                  padding: '100px 0 30px 0',
                   }}>
            <Box sx={{ paddingLeft: 2  }}>
              <Typography sx={{ color: '#767676', fontSize: '20px' }}>
                <p>438 Marine ParadeElwood,</p> 
                <p>Victoria P.O Box 3184</p>  <br />
                <p>Phone: +714 3948 0000</p>
                <p>Email: hello@architype.com</p>
              </Typography>
              <Box sx={{color: '#FFFFFF',
                  margin:'20px 0px'}}>
                <FacebookIcon/> &nbsp;
                <InstagramIcon/> &nbsp;
                <LinkedInIcon/>
              </Box>
            </Box>
            <Box sx={{ color: '#FFFFFF'  }}>
                <Typography Typography sx={{ fontSize: '22px' }}>Useful Links</Typography> 
                        <ul className='foot-nav-menu'>
                            <li>
                                <Link to={'/about'}>About Us</Link>
                            </li>
                            <li>
                                <Link to={'/construction'}>Construction</Link>
                            </li>
                            <li>
                                <Link to={'/interior'}>Interior</Link>
                            </li>
                            <li>
                                <Link to={'/contact'}>Contact</Link>
                            </li>
                        </ul>
            </Box>
            <Box sx={{ px:3 , 
              display: 'flex',
              flexDirection: 'column', }}>
              <Typography sx={{ color: '#FFFFFF', marginBottom: '16px', fontSize: '32px'}}>
                Want to talk about a new <br /> project?
              </Typography>
              <TextField sx={{ '& .MuiInput-root': {
                          color: '#767676',
                          fontSize: '20px',
                          margin: '8px 0px',
                        },'& .MuiInputBase-root:after': {
                          borderBottom: '2px solid #767676',
                      },}}
                id="standard-size-small"
                defaultValue="Enter your email"
                size="small"
                variant="standard"
                focused
              />
              <Button variant="contained"
                        sx={{
                          width:'186px',
                          height: '48px',
                          marginTop: '20px',
                          color: '#090909',
                          fontSize: '16px',
                          fontWeight: 700,
                          borderRadius: 'none',
                          '&.MuiButtonBase-root':{
                          textTransform:'none',
                          backgroundColor:'#FFFFFF',
                          borderRadius: '0px',
                        },
                        }}>Subscribe</Button>
            </Box>
        </Box>
              <Box sx={{  bgcolor: '#060606', padding: '30px 0 80px 0'}}>
              <Divider  sx={{ borderColor : '#FFFFFF', margin: '10px 70px 30px 70px',}}/>
                <Typography sx={{ color: '#767676',  fontSize: '20px', textAlign: 'center'}}>
                  Copyright © Architype | Designed by <span className='span'>Thirdeyeinnovations </span>
                </Typography>
              </Box>
        </Box>
      </>
  )
}

export default Footer