import React from 'react'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import StarIcon from '@mui/icons-material/Star'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Box from '@mui/material/Box'


const items = [
{ title: 'Find Books Nearby', body: 'Discover available books within your city and meet local readers.', icon: <LocationOnIcon sx={{ fontSize: 36 }} /> },
{ title: 'Exchange with Ease', body: 'Request swaps, confirm exchanges, and rate your trade partners.', icon: <CheckCircleIcon sx={{ fontSize: 36 }} /> },
{ title: 'Grow Your Library', body: 'Track your swaps and build a personal wishlist to receive alerts.', icon: <StarIcon sx={{ fontSize: 36 }} /> }
]


export default function Features() {
return (
<Box component="section" sx={{ py: 6 }}>
<Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 700 }}>
How Book by Barter helps
</Typography>


<Grid container spacing={3} sx={{ mt: 2 }}>
{items.map((it, i) => (
<Grid item xs={12} md={4} key={i}>
<Card elevation={3} sx={{ borderRadius: 3 }}>
<CardContent>
<Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
<Box sx={{ bgcolor: 'primary.main', color: 'white', p: 1.5, borderRadius: 2 }}>{it.icon}</Box>
<Box>
<Typography variant="h6" sx={{ fontWeight: 700 }}>{it.title}</Typography>
<Typography variant="body2" color="text.secondary">{it.body}</Typography>
</Box>
</Box>
</CardContent>
</Card>
</Grid>
))}
</Grid>
</Box>
)
}