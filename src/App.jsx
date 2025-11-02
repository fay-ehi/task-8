import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default function App() {
return (
<Box>
<NavBar />
<Container maxWidth="lg">
<Hero />
<Features />
<Testimonials />
<Contact />
</Container>
<Footer />
</Box>
)
}