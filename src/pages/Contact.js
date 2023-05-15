import { Box, Toolbar, Typography} from '@mui/material'
import React from 'react'
import Form from '../components/Layout/Form'
import Layout from '../components/Layout/Layout'

const Contact = () => {
  return (
    <Layout>
      
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '120px 100px',
        backgroundColor: '#0C0B0A',
        }}>
        <Box sx={{
          width: '50%',
          color: '#FFFFFF',
          }}>
          <Typography  sx={{
            fontSize:'52px',
            }}> 
            Contact us 
          </Typography>
          <Typography  sx={{
            fontSize:'18px',
            }}> 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          </Typography>
        </Box>
        <Box sx={{
          width: '50%'
          }}>
          <img 
                src='../images/contact.png'
                alt="logo"
                width='100%' 
              />
        </Box>
      </Box>
      <Box sx={{
          padding: '40px 100px',
          textAlign: 'center',
          backgroundColor: '#0C0B0A',
          color: '#FFFFFF',
          }}>
          <Typography  sx={{
            fontSize:'52px',
            }}> 
            Google map 
          </Typography>
          <Typography  sx={{
            fontSize:'18px',
            }}> 
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
          <Box sx={{
            padding: '40px 0px',
            backgroundColor: '#0C0B0A',
            }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77492134983!2d77.3012646607384!3d12.954459535201728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1683980794732!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" ></iframe>
          </Box>
      </Box>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '40px 140px',
        backgroundColor: '#0C0B0A',}}>
        <Box>
          <Typography sx={{color:'#FFFFFF'}}>Back office Location </Typography>
          <Typography sx={{color:'#767676'}}>
            <p>438 Marine Parade Elwood,</p>
            <p>Victoria P.O Box 3184</p>
            <p>Click to Google Map</p>
          </Typography>
        </Box>
        <Box>
          <Typography sx={{color:'#FFFFFF'}}>Experience Centre Location</Typography>
          <Typography sx={{color:'#767676'}}>
            <p>438 Marine Parade Elwood,</p>
            <p>Victoria P.O Box 3184</p>
            <p>Click to Google Map</p>
          </Typography>
        </Box>
        <Box>
          <Typography sx={{color:'#FFFFFF'}}>Product Unit Location </Typography>
          <Typography sx={{color:'#767676'}}>
            <p>438 Marine Parade Elwood,</p>
            <p>Victoria P.O Box 3184</p>
            <p>Click to Google Map</p>
          </Typography>
        </Box>
      </Box>
      <Box sx={{
        display: 'flex',
        padding: '40px 100px',
        backgroundColor: '#0C0B0A',
        }}>
          <Box>
            <Form />
          </Box>
          <Box >
          <img 
                src='../images/contact2.png'
                alt="logo"
                width='100%' 
               /*  sx={{
                  borderRadius: '40px',}} */
              />
          </Box>
      </Box>
    </Layout>
  )
}

export default Contact