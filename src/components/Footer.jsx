import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'


export default function Footer() {
return (
<Box component="footer" sx={{ py: 4, mt: 6, bgcolor: 'transparent', textAlign: 'center' }}>
<Typography variant="body2" color="text.secondary">© {new Date().getFullYear()} Book by Barter — Built with ❤️</Typography>
</Box>
)
}