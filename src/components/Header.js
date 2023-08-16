import React from 'react'

import {AppBar, Typography} from '@mui/material'

const img = require('../images/sanjay.jpg')


const Header = (props)=>{

  return (
      <AppBar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection:"row",padding:"15px" }}>
        
          <img src={img} alt="myphoto" style={{ height: '100px', width: 
          '100px', borderRadius: '50%' }} />
        
      
        
          <Typography variant="h4">My Portfolio</Typography>
        
          
          {props.children}
      </AppBar>
  )
}

export default Header