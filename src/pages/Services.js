import React from 'react'
import Homebody from '../components/Layout/Homebody'
import Layout from '../components/Layout/Layout'
import { Box, Toolbar, Typography } from '@mui/material';
import Brand from '../components/Layout/Brand'

const Services = () => {
  return (
    
    <Layout>
      <Box sx={{
        backgroundColor:'#0C0B0A',
        padding:'0 60px',
        }}>
        <Toolbar/>
        <Typography sx={{ fontSize: '52px', 
                    color: '#FFFFFF',}}>
                    Services
        </Typography>
       
        <div>
        <img 
            src='../images/constimg.png'
            alt="logo"
            width='100%'
        />
        </div>
      </Box>
      <Box bgcolor='#0C0B0A'
      sx={{
        padding: '60px 80px',}}>
          <Typography  sx={{
                  fontSize:'52px',
                  backgroundColor: '#0C0B0A',
                  color: '#FFFFFF',
                  }}> 
                  Our Services
                </Typography>
                <Typography  sx={{
                  fontSize:'18px',
                  backgroundColor: '#0C0B0A',
                  color: '#FFFFFF',
                  }}> 
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </Typography>
        </Box> 
      <Homebody/>
      <Brand/>
    </Layout>
  )
}

export default Services