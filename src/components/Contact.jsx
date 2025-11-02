import React, { useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Snackbar from '@mui/material/Snackbar'


export default function Contact() {
const [form, setForm] = useState({ name: '', email: '', message: '' })
const [open, setOpen] = useState(false)


function handleChange(e) {
setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
}


function handleSubmit(e) {
e.preventDefault()
setOpen(true)
setForm({ name: '', email: '', message: '' })
}


return (
<Box component="section" sx={{ py: 6 }}>
<Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>Contact us</Typography>
<Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gap: 2, gridTemplateColumns: '1fr', maxWidth: 640 }}>
<TextField label="Name" name="name" value={form.name} onChange={handleChange} required />
<TextField label="Email" name="email" value={form.email} onChange={handleChange} required />
<TextField label="Message" name="message" value={form.message} onChange={handleChange} multiline rows={4} required />
<Button type="submit" variant="contained" sx={{ width: 160 }}>Send Message</Button>
</Box>


<Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)} message="Message sent — demo only" />
</Box>
)
}