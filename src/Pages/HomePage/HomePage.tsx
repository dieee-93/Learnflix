import { Carrusel } from '@/Components'
import { Box } from '@mui/material'

const HomePage = (): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', flexFlow: 'column', alignItems: 'center', width: '100%' }} >
    <Carrusel catName="Front End"/>
    <Carrusel catName="React"/>
    </Box>
  )
}

export default HomePage
