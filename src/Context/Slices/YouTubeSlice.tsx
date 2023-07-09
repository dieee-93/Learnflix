import { youtubeApi } from '@/Api/YoutubeApi'
import withResults from '@/Mocks/Youtube/with-results.json'

const apiKey = import.meta.env.VITE_YOUTUBE_APIKEY as string

const movie = withResults

const extendedApiSlice = youtubeApi.injectEndpoints({
  endpoints: (builder) => ({
    getVideoThumbnail: builder.query<typeof movie, string>({
      query: (videoId: string) => `videos?part=snippet&id=${videoId}&key=${apiKey}`,
      providesTags: ['YouTubeVideo']
    })
  })
})

export const { useGetVideoThumbnailQuery } = extendedApiSlice
