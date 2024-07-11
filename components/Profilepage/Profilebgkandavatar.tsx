import { Box } from "@mui/material"
import {  Container   } from "@mui/material"

export function Profilecard() {
  return (
    <Box sx={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:'70vw',
      height:'65vh',
      margin:'0 auto',
      backgroundImage: 'url(/images/HDimgback.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      zIndex:"1",
    }}>
      
    </Box>
  )
}

export default Profilecard