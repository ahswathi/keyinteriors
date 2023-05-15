import { Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Brand = () => {
  return (
    <Box  bgcolor='#FFFFFF'>
        <Toolbar/>
        <Typography sx={{
                fontSize: '52px',
                textAlign:'center',
            }}
            >
            Brands And Collaborations
        </Typography>
        <Box sx={{ display: 'flex',
                alignItems: 'space-between',
                justifyContent: 'space-between', 
                padding: '80px 100px'}}>
                   <div>
                        <img 
                        src="1.png"
                        />
                    </div>
                   <div>
                        <img 
                        src="2.png"
                        />
                    </div> 
                   <div>
                        <img 
                        src="3.png"
                        />
                    </div> 
                   <div>
                        <img 
                        src="4.png"
                        />
                    </div> 
                   <div>
                        <img 
                        src="5.png"
                        />
                    </div> 
        </Box>
        <Box sx={{ display: 'flex',
                alignItems: 'space-between',
                justifyContent: 'space-between', 
                padding: '30px 100px'}}>
                   <div>
                        <img 
                        src="1.png"
                        />
                    </div>
                   <div>
                        <img 
                        src="2.png"
                        />
                    </div>
                   <div>
                        <img 
                        src="3.png"
                        />
                    </div> 
                   <div>
                        <img 
                        src="4.png"
                        />
                    </div> 
                   <div>
                        <img 
                        src="5.png"
                        />
                    </div> 
        </Box>
        <Toolbar/>
    </Box>
  )
}

export default Brand