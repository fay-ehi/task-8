import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'


export default function Hero() {
return (
<Box component="section" sx={{ py: 8 }}>
<Grid container spacing={4} alignItems="center">
<Grid item xs={12} md={6}>
<Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 800 }}>
Swap. Share. Read. Repeat.
</Typography>
<Typography variant="h6" color="text.secondary" paragraph>
Book by Barter makes it easy to exchange books with fellow readers in your neighbourhood — grow your shelf without buying new copies.
</Typography>


</Grid>


<Grid item xs={12} md={6}>
<Box sx={{ width: '100%', height: 360, borderRadius: 3, overflow: 'hidden', boxShadow: 3 }}>
  <img 
    src="/src/assets/hero.svg" 
    alt="Book by Barter illustration" 
    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
  />
</Box>
</Grid>
</Grid>
</Box>
)
}