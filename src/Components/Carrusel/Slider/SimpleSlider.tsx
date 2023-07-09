import { type VideoApiType } from '@/Types'
import type React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { VideoCard } from '../VideoCard'

interface Props {
  videoData: VideoApiType[]
}

const SimpleSlider: React.FC<Props> = (props: Props) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <Slider {...settings}>
      {props.videoData.map((video) => (
        <VideoCard
          key={video.id}
          videoData={video}
          borderColor={video.category}
        />
      ))}
    </Slider>
  )
}

export default SimpleSlider
