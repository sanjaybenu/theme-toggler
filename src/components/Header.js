import React from 'react'

import {AppBar, Typography, Box} from '@mui/material'

const img = require('../images/avatar.png')


const Header = (props)=>{

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={img} alt="avatar" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
          <Typography variant="h6">My Portfolio</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'flex-end' }}>
          {props.children}
        </Box>
      </AppBar>
    </Box>
  )
}

export default Header