import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const youtubeApi = createApi({
  reducerPath: 'youtubeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.googleapis.com/youtube/v3/'
  }),
  tagTypes: ['YouTubeVideo'],
  endpoints: () => ({})
})
