import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'


const testimonials = [
{ name: 'Aisha', text: 'I swapped three novels in a month — loved the community!', avatar: '' },
{ name: 'Daniel', text: 'Great way to discover authors without spending money.', avatar: '' },
]


export default function Testimonials() {
return (
<Box component="section" sx={{ py: 6 }}>
<Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: 700 }}>
Community voices
</Typography>


<Grid container spacing={3} sx={{ mt: 2 }}>
{testimonials.map((t, i) => (
<Grid item xs={12} md={6} key={i}>
<Card elevation={1} sx={{ borderRadius: 3 }}>
<CardContent sx={{ display: 'flex', gap: 2 }}>
<Avatar src={t.avatar}>{t.name[0]}</Avatar>
<Box>
<Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{t.name}</Typography>
<Typography variant="body2" color="text.secondary">{t.text}</Typography>
</Box>
</CardContent>
</Card>
</Grid>
))}
</Grid>
</Box>
)
}