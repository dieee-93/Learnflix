import { api } from '@/Api'
import { youtubeApi } from '@/Api/YoutubeApi'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [youtubeApi.reducerPath]: youtubeApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, youtubeApi.middleware)
})

export default store
