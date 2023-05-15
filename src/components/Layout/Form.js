import { Box, TextField, Button, Typography, FormControlLabel, Select, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import FaxIcon from '@mui/icons-material/Fax';
import EmailIcon from '@mui/icons-material/Email';
import FormControl from '@mui/material/FormControl';
/* import { formStyles } from '../../styles/FormStyles'; */

const Form = () => {
 const [status, setStatus] = useState('');
  /*  const classes = formStyles(); */

const handleChange = (event) => {
  setStatus(event.target.value);
};
  return (
    <Box sx={{
       /*  width: '100%', */
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        margin:'10px 60px 20px 0px',
    }}>
       <Typography  sx={{
                fontSize:'52px',
                color: '#FFFFFF',
                }}> 
                Enquire now
              </Typography>
              <Typography  sx={{
                fontSize:'18px',
                color: '#FFFFFF',
                }}> 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              </Typography>
   {/*  <Box sx={{
        display:'flex',
        flexDirection: 'column',
        margin:'20px 60px 20px 0px',
        }}> */}
         <TextField  sx={{ 
        fontFamily: 'Poppins',
        height: '42px',
        margin: '4px 0px 28px 0px',
        '& .MuiInputBase-input': { /* input field */
              color: '#676767',
              fontSize: '13px',
              fontFamily: 'Poppins',
              fontWeight: 400,
            },
        '& .MuiInputBase-root': { /* input border */
          borderRadius: '4px',
          border: '1px solid #DDDDDD',
          height : '42px',
          marginTop: '6px',
        },
        '&  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: 'transparent', /* remove input bordercolor focus */
        },
        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: '#DDDDDD',
        },
        }}
          placeholder="Name *"
        />
         <TextField  sx={{ 
        fontFamily: 'Poppins',
        height: '42px',
        margin: '4px 0px 28px 0px',
        '& .MuiInputBase-input': { /* input field */
              color: '#676767',
              fontSize: '13px',
              fontFamily: 'Poppins',
              fontWeight: 400,
            },
        '& .MuiInputBase-root': { /* input border */
          borderRadius: '4px',
          border: '1px solid #DDDDDD',
          height : '42px',
          marginTop: '6px',
        },
        '&  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: 'transparent', /* remove input bordercolor focus */
        },
        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: '#DDDDDD',
        },
        }}
          placeholder="Email *"
        />
         <TextField sx={{ 
        fontFamily: 'Poppins',
        height: '42px',
        margin: '4px 0px 28px 0px',
        '& .MuiInputBase-input': { /* input field */
              color: '#676767',
              fontSize: '13px',
              fontFamily: 'Poppins',
              fontWeight: 400,
            },
        '& .MuiInputBase-root': { /* input border */
          borderRadius: '4px',
          border: '1px solid #DDDDDD',
          height : '42px',
          marginTop: '6px',
        },
        '&  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: 'transparent', /* remove input bordercolor focus */
        },
        '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: '#DDDDDD',
        },
        }}
          placeholder="Phone number *"
        />
           <FormControl>
                    <Select  sx={{
                  height: '42px',
         fontFamily: 'Poppins',
         borderRadius: '4px',
         border: '2px solid #c4c4c4',
         marginTop: '9px',
         marginBottom: '28px',
         padding: '0 12px',
         color: '#676767',
         fontSize: '13px',
         fontFamily: 'Poppins',
         fontWeight: 400,
         '&.MuiInput-underline:before':{
              borderBottom: 0,
              content: 'none',
         },
         '&.MuiInput-underline:after':{
              borderBottom: 0,
              content: 'none',
       },}}
                    value={status}
                    onChange={handleChange}
                    displayEmpty
                    >
                    <MenuItem value="" disabled>
                      <p>How did you find us?</p>
                    </MenuItem>
                    <MenuItem value={'Active'}>Active</MenuItem>
                    <MenuItem value={'Inactive'}>Inactive</MenuItem>
                    </Select>
                 </FormControl>
        <Button variant="contained"
                  sx={{
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
        }}>SEND</Button>
   {/*  </Box> */}
   <Box sx={{
        display:'flex',
        justifyContent: 'space-between',
        padding:'40px 10px 20px 0px',
        color: '#FFFFFF',
        }}>
      <Box sx={{
        display:'flex',
        alignItems: 'center',
        }}>
        <div>
          <PhoneInTalkIcon/>
        </div>
        <Box sx={{
        fontSize: '12px',
        paddingLeft: '10px'}}>
          <Typography>
              Phone 
          </Typography>
          <Typography color='#FFC12B'>
            03 5432 1234
          </Typography>
        </Box>
      </Box>
      <Box sx={{
        display:'flex',
        alignItems: 'center',
        }}>
        <div>
          <FaxIcon/>
        </div>
        <Box sx={{
        fontSize: '12px',
        paddingLeft: '10px'}}>
          <Typography>
          FAX 
          </Typography>
          <Typography color='#FFC12B'>
            03 5432 1234
          </Typography>
        </Box>
      </Box>
      <Box sx={{
        display:'flex',
        alignItems: 'center',
        }}>
        <div>
          <EmailIcon/>
        </div>
        <Box sx={{
        fontSize: '12px',
        paddingLeft: '10px'}}>
          <Typography>
            EMAIL 
          </Typography>
          <Typography color='#FFC12B'>
            info@marcc.com.au
          </Typography>
        </Box>
      </Box>
   </Box>
    </Box>
  )
}

export default Form