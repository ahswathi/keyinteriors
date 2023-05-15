import React from 'react'
import { Button } from '@mui/material'; 

const Buttons = ({className, type, value, children,onClick}) => {
  return (
    <Button 
    onClick={onClick}
    className={className} 
    type={type} 
    value={value}
    variant="contained"
    > {children} </Button>
  )
}

export default Button