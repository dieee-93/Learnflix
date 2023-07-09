import { useGetCategoriesQuery } from '@/Context'
import { CircularProgress, FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material'
import type React from 'react'
import { type ChangeEvent } from 'react'
import { BiError } from 'react-icons/bi'

interface Props {
  value: string
  handleChange: (evt: ChangeEvent<HTMLInputElement>) => void
  validation: (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  error: boolean
  helperText: string
}

const CategorySelect: React.FC<Props> = (props: Props): JSX.Element => {
  const { data: categories, isLoading, isSuccess } = useGetCategoriesQuery()
  if (isLoading) {
    return <CircularProgress />
  }
  if (isSuccess) {
    console.log(props.value)
    return (<>
            <FormControl fullWidth error={props.error}>
    <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
    <Select fullWidth
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={props.value}
    name="category"
    label="Categoria
    "
    onChange={(e) => { props.handleChange(e as ChangeEvent<HTMLInputElement>) }}
    onBlur={(e) => { props.validation(e) }}
  >
    {categories.map((category) => {
      return <MenuItem value={category.name} key={category.id}>{category.name}</MenuItem>
    })}
  </Select>
  <FormHelperText>{props.helperText}</FormHelperText>
    </FormControl>
    </>)
  } else {
    return <BiError>Error al cargar las categorias, por favor actualiza la pagina</BiError>
  }
}

export default CategorySelect
