import React from 'react'
import Brand from '../components/Layout/Brand'
import ImgContBody from '../components/Layout/ImgContBody'
import Layout from '../components/Layout/Layout'
import { Box, Toolbar, Typography } from '@mui/material';

const Interior = () => {
  return (
    <Layout>
      <Box sx={{
        backgroundColor:'#0C0B0A',
        padding:'0 60px',
        }}>
        <Toolbar/>
        <Typography sx={{ fontSize: '52px', 
                    color: '#FFFFFF',}}>
                    Interior Design
        </Typography>
        <div>
        <img 
            src='../images/constimg.png'
            alt="logo"
            width='100%'
        />
        </div>
      </Box>
      <ImgContBody/>
      <Brand/>
    </Layout>
  )
}

export default Interior