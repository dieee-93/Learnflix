import { type VideoApiType } from '@/Types'
import { Card, CardMedia } from '@mui/material'
import type React from 'react'

interface Props {
  borderColor: string
  videoData: VideoApiType
}

const VideoCard: React.FC<Props> = (props: Props) => {
  const { imgUrl, title } = props.videoData
  return (
      <Card sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: '260px',
        height: '260px',
        backgroundColor: '#000000'
      }}>
      <CardMedia
        component="img"
        alt={title}
        image={imgUrl}
        sx={{ width: '100%', height: '100%' }}
      />
      </Card>

  )
}

export default VideoCard
