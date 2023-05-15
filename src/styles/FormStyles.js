import { makeStyles   } from '@mui/material/styles';

export const formStyles = makeStyles({
     formInput: {
        width : '350px',
        fontFamily: 'Poppins',
        margin: '4px 48px 28px 0px',
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
        
      },
      selectInput:{
         width : '350px',
         height : '42px',
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
         },
        
       },
    });   