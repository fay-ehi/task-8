import { createTheme } from '@mui/material/styles'


const theme = createTheme({
palette: {
mode: 'light',
primary: {
main: '#0b73ff' 
},
secondary: {
main: '#d4af37' 
},
background: {
default: '#f7fbff'
}
},
shape: {
borderRadius: 12
},
components: {
MuiButton: {
defaultProps: {
disableElevation: true
}
}
}
})


export default theme