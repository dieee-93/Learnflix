import { useYoutubeApi } from '@/Hooks/VideoHooks/useYoutubeApi'
import { Box, CircularProgress, Typography } from '@mui/material'
import styled from 'styled-components'
import { ApiError } from '../ApiError'
import { useGetVideoThumbnailQuery } from '@/Context/Slices/YouTubeSlice'
import { useCallback, useEffect, useRef } from 'react'
import { type YoutubeApiType } from '@/Types'

interface Props {
  videoUrl: string
  handleYoutubeData: (youtubeTitle: string, youtubeDescription: string, youtubeImgUrl: string) => void
}

const VideoInfo: React.FC<Props> = (props: Props) => {
  const { handleYoutubeLink, mapResponseToObject } = useYoutubeApi()
  const { data: youtubeVideo, isSuccess, isLoading } = useGetVideoThumbnailQuery(handleYoutubeLink(props.videoUrl))
  const youtubeData = useRef< YoutubeApiType | null>(null)
  useCallback(() => {
    console.log('ñaña')
    if (youtubeData.current !== null && youtubeVideo !== undefined && youtubeData.current.title !== youtubeVideo.items[0].snippet.title) {
      youtubeData.current = mapResponseToObject(youtubeVideo)
    }
  }, [youtubeVideo])

  useEffect(() => {
    if (youtubeData.current !== null) {
      props.handleYoutubeData(youtubeData.current.title, youtubeData.current.description, youtubeData.current.thumbnails.maxres.url)
    }
  }, [youtubeData.current])

  if (isLoading) {
    return <CircularProgress/>
  }
  if (isSuccess) {
    if (youtubeData.current === null) { youtubeData.current = mapResponseToObject(youtubeVideo) }

    const { title, thumbnails, channelTitle, description } = youtubeData.current
    return <StyledVideoInfo>
      <Box sx={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-around', alignItems: 'center' }}>
      <StyledVideoThumbnail src={thumbnails.maxres.url}></StyledVideoThumbnail>
      <Box sx={{ width: '70%' }}>
      <Typography variant='h4' component='h3' sx={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}>{title}</Typography>
      <Typography variant='h5' component='h5' sx={{ width: '100%', padding: '10px', boxSizing: 'border-box', fontSize: '1em' }}>Canal: {channelTitle}</Typography>
      </Box>

      <Typography variant='subtitle2' component='p' sx={{ padding: '10px', boxSizing: 'border-box', fontSize: '0.8em' }}>{description}</Typography>
      </Box>
    </StyledVideoInfo>
  } else {
    return <ApiError/>
  }
}

const StyledVideoInfo = styled.div`
  
`
const StyledVideoThumbnail = styled.img`
    height: auto;
    width: 20%;

`

export default VideoInfo
