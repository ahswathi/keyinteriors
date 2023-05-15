import { Toolbar, Typography, Box, Button } from '@mui/material'
import React from 'react'
import ImgContBody from '../components/Layout/ImgContBody'
import Layout from '../components/Layout/Layout'
import Brand from '../components/Layout/Brand'
import Slider from '../components/Layout/Slider'
import Homebody from '../components/Layout/Homebody'

const Home = () => {
  return (
    <Layout>
     {/*  <Toolbar/> */}
      <Box>
        <Typography sx={{ fontSize: '52px', 
                      color: '#FFFFFF',
                      padding: '30px 80px',
                      backgroundColor: '#0C0B0A',}}>
              Transform Your Home Into a Haven With <br/> Our Interior Design Solutions
        </Typography>  
      </Box>
      <Box>
        <Slider/>
        <Box bgcolor='#0C0B0A'>
          <Typography  sx={{
                  fontSize:'52px',
                  textAlign: 'center',
                  backgroundColor: '#0C0B0A',
                  color: '#FFFFFF',
                  }}> 
                  Our services
                </Typography>
                <Typography  sx={{
                  fontSize:'18px',
                  textAlign: 'center',
                  backgroundColor: '#0C0B0A',
                  color: '#FFFFFF',
                  }}> 
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                </Typography>
        </Box> 
      </Box>
  
      <Homebody/>
     
      <Box sx={{
                position:'relative',
              }}>
            <img 
              src='../images/index2.png'
              alt="logo"
              width='100%' 
            />
            <Box sx={{ position: 'absolute',
              top: '100px',
              left: 0,
              right: 0,
              margin: '10px 0',
              padding: '16px',
              color: '#FFFFFF',
              textAlign: 'center',}}>
              <Typography  sx={{
                fontSize:'52px',
                }}> 
                For more information enquire now 
              </Typography>
              <Typography  sx={{
                fontSize:'18px',
                }}> 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              </Typography>
              <Button variant="contained"
                  sx={{
                  width:'486px',
                  height: '48px',
                  color: '#090909',
                  fontSize: '16px',
                  fontWeight: 700,
                  borderRadius: 'none',
                  margin: '20px 0',
                  '&.MuiButtonBase-root':{
                  textTransform:'none',
                  backgroundColor:'#FFC12B',
                  borderRadius: '0px',
                  },
                }}>Enquire now</Button>
            </Box> 
      </Box>
     <Brand/>
    </Layout>
  )
}

export default Home