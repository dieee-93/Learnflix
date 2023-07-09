import type withResults from 'Mocks/Youtube/with-results.json'
import { type YoutubeApiType } from '@/Types'

export interface useYoutubeApiReturnType {
  handleYoutubeLink: (videoLink: string) => string
  mapResponseToObject: (youtubeResponse: typeof withResults) => YoutubeApiType

}

export const useYoutubeApi = (): useYoutubeApiReturnType => {
  const handleYoutubeLink = (videoLink: string): string => {
    const youtubeLink = videoLink
    const regExp = /(?:youtube\.com\/(?:watch\?.*v=|embed\/|v\/)|youtu\.be\/)([\w-]{11})/
    const result = youtubeLink.match(regExp)
    let idVideo = ''
    if
    ((result != null) && result.length === 2) {
      idVideo = result[1]
    }
    return idVideo
  }
  const mapResponseToObject = (youtubeResponse: typeof withResults): YoutubeApiType => {
    const { title, description, thumbnails, channelTitle } = youtubeResponse.items[0].snippet

    return { title, description, thumbnails, channelTitle }
  }
  return { handleYoutubeLink, mapResponseToObject }
}
