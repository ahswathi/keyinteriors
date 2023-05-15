import React from 'react'
import { Box, Toolbar, Typography, Button} from '@mui/material';
import Buttons from './Buttons';
import Slider2 from './Slider2'

const Homebody = () => {
  return (
      <>
      
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        display: 'flex',
        padding: '30px 80px',
        backgroundColor: '#0C0B0A',}}>
        <Box><Slider2/></Box>
        <Box sx={{
              color: 'black',
              width: '100%',
              color:'#FFFFFF',
              backgroundColor: '#0C0B0A',
              paddingLeft: '40px',
          }} >
            <Typography sx={{
              fontSize: '42px',
            }}>Construction</Typography>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Button variant="outlined"
            sx={{
              width:'186px',
              height: '48px',
              marginTop: '20px',
              '&.MuiButtonBase-root':{
              textTransform:'none',
              color:'#DEDEDE',
              border: '1px solid #FFC12B',
            },
            }}>Read more</Button>
        </Box>
    </Box>
    <Box sx={{
            display: 'flex',
            alignItems: 'center',
            display: 'flex',
            padding: '30px 80px',
            backgroundColor: '#0C0B0A',}}>
            <Box sx={{
                color: 'black',
                width: '100%',
                color:'#FFFFFF',
                backgroundColor: '#0C0B0A',
                paddingRight: '40px',
            }} >
                <Typography sx={{
                fontSize: '42px',
                }}>Interior</Typography>
                <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
                <Button variant="outlined"
                sx={{
                width:'186px',
                height: '48px',
                marginTop: '20px',
                '&.MuiButtonBase-root':{
                textTransform:'none',
                color:'#DEDEDE',
                border: '1px solid #FFC12B',
                },
                }}>Read more</Button>
            </Box>
        <Box><Slider2/></Box>
    </Box>
      </>
  )
}

export default Homebody