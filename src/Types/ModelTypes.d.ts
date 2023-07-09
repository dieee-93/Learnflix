import { type InputApiType } from './ApiTypes'
import withResults from '@/Mocks/Youtube/with-results.json'

type video = typeof withResults
const thumbnailMockObject = withResults.items[0].snippet.thumbnails

export type ThumbnailInfoType = typeof thumbnailMockObject

export interface InputModelType {
  input: InputApiType
}

export interface InputStringDataModelType {
  value: string
  valid: boolean
  errorMsg: string
}

export interface InputNumberDataModelType {
  value: number
  valid: boolean
  errorMsg: string
}

export interface VideoModelType {
  title: InputStringDataModelType
  description: InputStringDataModelType
  videoUrl: InputStringDataModelType
  imgUrl: InputStringDataModelType
  category: InputStringDataModelType
  securityCode: InputNumberDataModelType
}

export interface CategoryModelType {
  name: InputStringDataModelType
  description: InputStringDataModelType
  color: InputStringDataModelType
  securityCode: InputNumberDataModelType
}

export type CoursesColors = Record<string, string>

export interface ValidationType {
  valid: boolean
  errorMsg: string
}
