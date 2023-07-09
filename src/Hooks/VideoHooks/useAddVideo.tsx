import { useNewVideoMutation } from '@/Context'
import { type VideoModelType } from '@/Types'
import { v4 as uuidv4 } from 'uuid'
import type React from 'react'
import { useHandleValidation } from '../useHandleValidation/useHandleValidation'
import { useState } from 'react'

export interface useAddCategoryReturnType {
  video: VideoModelType
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  handleChange: (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  handleValidation: (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  handleYoutubeData: (title: string, description: string, youtubeImgUrl: string) => void
}

export const useAddVideo = (): useAddCategoryReturnType => {
  const initialState: VideoModelType = {
    title: { value: '', valid: false, errorMsg: '' },
    videoUrl: { value: '', valid: false, errorMsg: '' },
    imgUrl: { value: '', valid: false, errorMsg: '' },
    category: { value: '', valid: false, errorMsg: '' },
    description: { value: '', valid: false, errorMsg: '' },
    securityCode: { value: 0, valid: false, errorMsg: '' }
  }
  const [video, setVideo] = useState<VideoModelType>(initialState)
  const [addVideo, { isLoading, isSuccess, isError }] = useNewVideoMutation()
  const { validate } = useHandleValidation()
  const validateVideo = (): boolean => {
    Object.entries(video).forEach((videoProps) => {
      const propValue = videoProps[1].value
      const propName = videoProps[0]
      const validation = validate(propValue, propName, 'Nuevo Video')
      setVideo((prevVideo) => ({
        ...prevVideo,
        [videoProps[0]]: {
          ...prevVideo[propName as keyof VideoModelType],
          ...validation
        }
      }))
    })
    const videoValid = (Object.values(video).filter(valueOfValid => valueOfValid.valid !== true).length === 0)
    return videoValid
  }

  const handleChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setVideo({ ...video, [evt.target.name]: { ...video[evt.target.name as keyof VideoModelType], value: evt.target.value } })
  }

  const handleYoutubeData = (youtubeTitle: string, youtubeDescription: string, youtubeImgUrl: string): void => {
    const { title, description, imgUrl } = video
    setVideo({ ...video, title: { ...title, value: youtubeTitle }, description: { ...description, value: youtubeDescription }, imgUrl: { ...imgUrl, value: youtubeImgUrl } })
  }

  const handleValidation = (

    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const validation = validate(evt.target.value, evt.target.name, 'Nuevo Video')
    setVideo({ ...video, [evt.target.name]: { ...video[evt.target.name as keyof VideoModelType], ...validation } })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (validateVideo()) {
      const { videoUrl, title, imgUrl, category, description, securityCode } = video
      const videoToSave = { id: uuidv4(), videoUrl: videoUrl.value, title: title.value, imgUrl: imgUrl.value, category: category.value, description: description.value, securityCode: securityCode.value }
      addVideo(videoToSave)
        .unwrap()
        .then(() => {
          setVideo(initialState)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  return { video, isLoading, isSuccess, isError, handleSubmit, handleValidation, handleChange, handleYoutubeData }
}
