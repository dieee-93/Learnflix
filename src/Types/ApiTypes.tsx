import type withResults from '@/Mocks/Youtube/with-results.json'
import { type ThumbnailInfoType } from '.'

export type youtubeApiRawResponse = typeof withResults

export interface CategoryApiType {
  id: string
  name: string
  description: string
  color: string
  securityCode: number
}

export interface YoutubeApiType {
  title: string
  description: string
  thumbnails: ThumbnailInfoType
  channelTitle: string
}

export interface VideoApiType {
  id: string
  title: string
  videoUrl: string
  imgUrl: string
  category: string
  description: string
  securityCode: number
}

export interface FormApiType {
  title: string
  inputs: InputApiType[]
  buttons: ButtonApiType[]
}

export interface InputApiType {
  label: string
  name: string
  type: 'text' | 'number' | 'color' | 'textarea' | 'select'
}

export interface ButtonApiType {
  buttonText: string
  type: string
}

export type CategoryKey = keyof CategoryApiType
export type VideoKey = keyof VideoApiType
