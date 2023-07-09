import { Box, Typography } from '@mui/material'
import { BiErrorAlt } from 'react-icons/bi'
import styled from 'styled-components'

const ApiError: React.FC = () => {
  return <StyledApiError>
    <Box sx={{ display: 'flex', flexFlow: 'column nowrap', justifyContent: 'space-between', alignItems: 'center', padding: '0px 18px' }}>
    <Typography variant='h3' component='h3'><BiErrorAlt/></Typography>
    <Typography variant='h4' component='h4'>Error en el servidor</Typography>
    <Typography variant='h5' component='h5'>Intenta</Typography>
    </Box>
  </StyledApiError>
}

const StyledApiError = styled.div`

`
export default ApiError
