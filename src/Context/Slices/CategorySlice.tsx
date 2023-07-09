import { api } from '../../Api/Api'
import { type CategoryApiType } from '../../Types/ApiTypes'

export const extendedApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<CategoryApiType[], void>({
      query: () => 'categories',
      providesTags: ['Category']
    }),
    getCategoryById: builder.query<CategoryApiType[], number>({
      query: (id: number) => `categories/${id}`,
      providesTags: ['Category']
    }),
    newCategory: builder.mutation<CategoryApiType, Partial<CategoryApiType>>({
      query: (cat: CategoryApiType) => ({
        url: 'categories/',
        method: 'POST',
        body: cat
      }),
      invalidatesTags: ['Category']
    }),
    updateCategory: builder.mutation<CategoryApiType, CategoryApiType>({
      query: (cat: CategoryApiType) => ({
        url: `categories/${cat.id}`,
        method: 'PUT',
        body: cat
      }),
      invalidatesTags: ['Category']
    }),
    deleteCategory: builder.mutation<void, string>({
      query: (id: string) => ({
        url: `categories/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Category']
    })
  })
})

export const {
  useGetCategoriesQuery,
  useGetCategoryByIdQuery,
  useNewCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation
} = extendedApiSlice
