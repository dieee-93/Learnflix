import { useNewCategoryMutation } from '@/Context'
import { type CategoryModelType } from '@/Types'
import { v4 as uuidv4 } from 'uuid'
import type React from 'react'
import { useState } from 'react'

export interface useAddCategoryReturnType {
  category: CategoryModelType
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  handleChange: (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  handleValidation: (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}

export const useAddCategory = (): useAddCategoryReturnType => {
  const initialState: CategoryModelType = {
    name: { value: '', valid: true, errorMsg: '' },
    description: { value: '', valid: true, errorMsg: '' },
    color: { value: '', valid: true, errorMsg: '' },
    securityCode: { value: 0, valid: true, errorMsg: '' }
  }
  const [category, setCategory] = useState<CategoryModelType>(initialState)
  const [addCategory, { isLoading, isSuccess, isError }] = useNewCategoryMutation()

  const handleChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    console.log(category)
    if (typeof evt === 'string') {
      const newColor = { value: evt, valid: true, errorMsg: '' }
      setCategory({ ...category, color: newColor })
    } else {
      setCategory({ ...category, [evt.target.name]: { value: evt.target.value, valid: category[evt.target.name as keyof CategoryModelType].valid, errorMsg: category[evt.target.name as keyof CategoryModelType].errorMsg } })
    }
  }

  const handleValidation = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    console.log(category)
    setCategory({ ...category, [evt.target.name]: { value: evt.target.value, valid: category[evt.target.name as keyof CategoryModelType].valid, errorMsg: category[evt.target.name as keyof CategoryModelType].errorMsg } })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const { name, color, description, securityCode } = category
    const categoryToSave = { id: uuidv4(), name: name.value, description: description.value, color: color.value, securityCode: securityCode.value }
    addCategory(categoryToSave)
      .unwrap()
      .then(() => {
        setCategory(initialState)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // const handleSubmit = async (cat: CategoryApiType) => {
  //   if (cat.name !== '') {
  //     setCategory(cat)
  //     await addCategory(category)
  //       .unwrap()
  //       .then((): JSX.Element => {
  //         setCategory(initialState)
  //         return (
  //           <Alert severity='success'>Categoria creada exitosamente</Alert>
  //         )
  //       })
  //       .catch((e): JSX.Element => {
  //         return <Alert severity='warning'>{e}</Alert>
  //       })
  //   } else {
  //     return <Alert severity='error'>Categoria invalida</Alert>
  //   }
  // }

  return { category, isLoading, isSuccess, isError, handleSubmit, handleValidation, handleChange }
}
