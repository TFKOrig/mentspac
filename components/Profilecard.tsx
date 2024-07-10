import { Box } from "@mui/material"

export function Profilecard() {
  return (
    <Box sx={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      Width:'60vw',
      Height:'60vh',
      margin:'0 auto',
      backgroundImage: 'url(/images/HDimgback.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
      <h1>HI</h1>
    </Box>
  )
}

export default Profilecard