import { Form } from '@/Components/Form'
import YoutubeCard from '@/Components/YoutubeCard/YoutubeCard'
import { useAddVideo } from '@/Hooks/VideoHooks/useAddVideo'
import { Box } from '@mui/material'
import type React from 'react'
import styled from 'styled-components'

const NewVideo: React.FC = () => {
  const { video, handleSubmit, handleValidation, handleChange, handleYoutubeData, isLoading, isSuccess, isError } = useAddVideo()
  return (
    <StyledNewVideo><Box sx={{ width: '100%', height: '40%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
 <YoutubeCard video={video} handleChange={handleChange} handleValidation={handleValidation} handleYoutubeData={handleYoutubeData}></YoutubeCard>
    </Box>

      <Box sx={{ width: '100%', height: '60%' }}><Form
        formTitle='Nuevo Video'
        inputData={video}
        onInputChange={handleChange}
        onInputBlur={handleValidation}
        onSubmit={handleSubmit}
        queryState={[isLoading, isSuccess, isError]}></Form></Box>
    </StyledNewVideo>
  )
}

const StyledNewVideo = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    
`

export default NewVideo
