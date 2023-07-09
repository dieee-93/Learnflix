import CategoryList from '@/Components/CategoryList/CategoryList'
import { Form } from '@/Components/Form'
import { useAddCategory } from '@/Hooks'
import type React from 'react'
import styled from 'styled-components'

const NewCategory: React.FC = () => {
  const { handleChange, handleValidation, handleSubmit, category, isLoading, isSuccess, isError } = useAddCategory()

  return (<StyledNewCategory>
<Form
      formTitle='Nueva Categoría'
      inputData={category}
      key={'Nueva Categoría'}
      onInputChange={handleChange}
      onInputBlur={handleValidation}
      onSubmit={handleSubmit}
      queryState={[isLoading, isSuccess, isError]}
    ></Form>
    <CategoryList/>
  </StyledNewCategory>
  )
}

const StyledNewCategory = styled.div`
  display:flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

export default NewCategory
