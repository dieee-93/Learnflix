import { type FormApiType } from '@/Types'
import { api } from '../../Api/Api'

const extendedApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getForms: builder.query({
      query: () => 'forms',
      providesTags: ['Form']
    }),
    getFormByTitle: builder.query<FormApiType[], string>({
      query: (catTitle: string) => `forms?title=${catTitle}`,
      providesTags: ['Form']
    })
  })
})

export const { useGetFormsQuery, useGetFormByTitleQuery } = extendedApiSlice
