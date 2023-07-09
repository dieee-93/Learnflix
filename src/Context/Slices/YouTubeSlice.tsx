import { youtubeApi } from '@/Api/YoutubeApi'
import withResults from '@/Mocks/Youtube/with-results.json'

const key = 'AIzaSyBzKhBag6vP6w0-YIdI9tIeBqMmsfyUjH8'

const movie = withResults

const extendedApiSlice = youtubeApi.injectEndpoints({
  endpoints: (builder) => ({
    getVideoThumbnail: builder.query<typeof movie, string>({
      query: (videoId: string) => `videos?part=snippet&id=${videoId}&key=${key}`,
      providesTags: ['YouTubeVideo']
    })
  })
})

export const { useGetVideoThumbnailQuery } = extendedApiSlice
