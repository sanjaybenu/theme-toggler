import React from 'react'

import {AppBar, Typography} from '@mui/material'

const img = require('../images/avatar.png')


const Header = (props)=>{

  return (
      <AppBar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection:"row",padding:"15px" }}>
          <img src={img} alt="avatar" style={{ height: '80px', width: '80px', borderRadius: '50%' }} />
          <Typography variant="h6">My Portfolio</Typography>
          {props.children}
      </AppBar>
  )
}

export default Header