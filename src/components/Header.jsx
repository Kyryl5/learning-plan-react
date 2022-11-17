import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import logo from '../assets/logo.svg'
import '../index.css'

export default function Header() {
  return (
    <AppBar
      position="static"
      elevation={20}
      style={{ backgroundColor: '#282c34' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ justifyContent: 'space-between' }}>
          <h1>React For Beginners - Free Course by Itera</h1>
          <Avatar
            className="logo"
            alt="logo"
            src={logo}
            sx={{ width: 150, height: 150 }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  )
}
