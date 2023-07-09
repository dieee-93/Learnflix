import { useGetFormByTitleQuery } from '@/Context'
import { type ButtonApiType, type InputApiType, type VideoModelType, type CategoryModelType } from '@/Types'
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  type SelectChangeEvent
} from '@mui/material'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Input } from './Input'
import { blackColors } from '..'

type NewCategoryInputChangeType = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
type NewVideoInputChangeType = (evt: string | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | SelectChangeEvent>) => void

export type OnInputChangeType = NewCategoryInputChangeType | NewVideoInputChangeType

interface Props {
  formTitle: string
  inputData: CategoryModelType | VideoModelType
  onInputChange: OnInputChangeType
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  onInputBlur: (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  queryState: boolean[]
}

const Form = (props: Props): JSX.Element => {
  const {
    data: form,
    isLoading,
    isSuccess
  } = useGetFormByTitleQuery(props.formTitle)

  if (isLoading) {
    return <Container sx={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CircularProgress/></Container>
  }

  if (isSuccess) {
    const { title, inputs, buttons } = form[0]

    return (
      <Container
        maxWidth='xl'
        sx={{
          display: 'flex',
          width: '80%',
          height: '100%',
          flexFlow: 'column nowrap',
          alignItems: 'space-around',
          backgroundColor: blackColors.lighter,
          padding: '20px',
          borderRadius: '10px',
          boxShadow: 'box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;'

        }}
      >
        <StyledForm onSubmit={props.onSubmit}>
          {inputs.map((input: InputApiType, i: number) => {
            return (
              <Input
                key={i}
                inputData={input}
                validation={(e) => { props.onInputBlur(e) }}
                values={props.inputData}
                handleChange={props.onInputChange}
              />
            )
          })}
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '25%' }}>
              {buttons.map((btn: ButtonApiType, i: number) => {
                return btn.type === 'primary'
                  ? (
                  <Button type="submit" variant='contained' key={i}>{btn.buttonText}</Button>
                    )
                  : (
                  <Button variant='outlined' key={i}>{btn.buttonText}</Button>
                    )
              })}
            </Box>

            {title === 'Nuevo Video' && (
              <Box>
              <Link to='/newcat'>
                <Button variant='contained'>Nueva Categoria</Button>
              </Link>
              </Box>

            )}
          </Box>
        </StyledForm>
      </Container>
    )
  } else {
    return (
      <Alert severity='error'>
        No se pudo cargar la pagina, intenta nuevamente.
      </Alert>
    )
  }
}

const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  height: 100%;
`

export default Form
