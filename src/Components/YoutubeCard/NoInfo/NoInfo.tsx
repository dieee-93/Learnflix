import { Box, Typography } from '@mui/material'
import { AiOutlineVideoCameraAdd } from 'react-icons/ai'
import styled from 'styled-components'

const NoInfo: React.FC = () => {
  return (<StyledNoInfo>
    <Box sx={{ display: 'flex', flexFlow: 'column nowrap', justifyContent: 'space-between', alignItems: 'center' }}>
    <Typography variant='h3' component='h3'><AiOutlineVideoCameraAdd/></Typography>
    <Typography variant='h5' component='h5'>Todavia no has agregado un enlace</Typography>
    </Box>
  </StyledNoInfo>)
}

const StyledNoInfo = styled.div`
    margin: 0px 20px
`
export default NoInfo
