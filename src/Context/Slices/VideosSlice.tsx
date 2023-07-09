import { api } from '@/Api'
import type { VideoApiType } from '@/Types'

const extendedApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getVideos: builder.query<VideoApiType[], void>({
      query: () => 'videos',
      providesTags: ['Video']
    }),
    getVideosByCategory: builder.query<VideoApiType[], string>({
      query: (catName: string) => `videos?category=${catName}`,
      providesTags: ['Video']
    }),
    getVideoById: builder.query<VideoApiType, number>({
      query: (id: number) => `videos/${id}`,
      providesTags: ['Video']
    }),
    newVideo: builder.mutation<VideoApiType, Partial<VideoApiType>>({
      query: (vid: VideoApiType) => ({
        url: 'videos/',
        method: 'POST',
        body: vid
      })
    }),
    updateVideo: builder.mutation<VideoApiType, VideoApiType>({
      query: (vid: VideoApiType) => ({
        url: `videos/${vid.id}`,
        method: 'PUT',
        body: vid
      })
    }),
    deleteVideo: builder.mutation<void, string>({
      query: (id: string) => ({
        url: `videos/${id}`,
        method: 'DELETE'
      })
    })
  })
})

export const {
  useGetVideosQuery,
  useGetVideosByCategoryQuery,
  useGetVideoByIdQuery,
  useNewVideoMutation,
  useUpdateVideoMutation,
  useDeleteVideoMutation
} = extendedApiSlice
