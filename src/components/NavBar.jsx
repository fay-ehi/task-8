import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'


export default function NavBar() {
return (
<AppBar position="sticky" elevation={2} color="transparent" sx={{ backdropFilter: 'blur(6px)', backgroundColor: 'rgba(255,255,255,0.75)' }}>
<Toolbar>
<Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
<Box sx={{ width: 48, height: 48, mr: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'primary.main', color: 'white', borderRadius: 2, fontWeight: 700 }}>
📖
</Box>
<Typography variant="h6" component="div" sx={{ fontWeight: 700 }}>
Book by Barter
</Typography>
</Box>


<Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
<Button>Home</Button>
<Button>Features</Button>
<Button>Contact</Button>
<Button variant="contained">Start Sharing</Button>
</Box>


<IconButton edge="end" sx={{ display: { md: 'none' } }} aria-label="menu">
<MenuIcon />
</IconButton>
</Toolbar>
</AppBar>
)
}