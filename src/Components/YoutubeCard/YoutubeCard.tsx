import { Box, TextField } from '@mui/material'
import styled from 'styled-components'
import { NoInfo } from './NoInfo'
import { VideoInfo } from '.'
import { type VideoModelType } from '@/Types'
import { blackColors } from '..'

interface Props {
  video: VideoModelType
  handleValidation: (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  handleChange: (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  handleYoutubeData: (youtubeTitle: string, youtubeDescription: string, youtubeImgUrl: string) => void
}

const YoutubeCard: React.FC<Props> = (props: Props) => {
  const { videoUrl } = props.video
  return (<StyledYoutubeCard>
    {videoUrl.value !== '' && props.video.videoUrl.valid ? <VideoInfo videoUrl={videoUrl.value} handleYoutubeData={props.handleYoutubeData}/> : <NoInfo/>}
    <Box sx={{ width: '90%', display: 'flex', justifyContent: 'center', padding: '0px 18px', boxSizing: 'border-box', margin: '20px 10px' }}>
      <TextField
        onChange={(e) => { props.handleChange(e) }}
        onBlur={(e) => { props.handleValidation(e) }}
        name='videoUrl'
        helperText={videoUrl.errorMsg}
        value={videoUrl.value} error={ !videoUrl.valid && videoUrl.errorMsg !== ''}
        label="Introduzca Link de youTube" fullWidth>
        </TextField>
    </Box>
  </StyledYoutubeCard>)
}

const StyledYoutubeCard = styled.div`
  width: 80%;
  display: flex;
  flex-flow: column nowrap;
  margin:30px 0px;
  justify-content: space-around;
  align-items: center;
  border: 2px inset #c22525;
  border-radius: 10px;
  padding: 15px;
  box-sizing: content-box;
  background-color: ${blackColors.lighter};
`
export default YoutubeCard
