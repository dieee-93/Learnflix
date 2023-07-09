import { useGetVideosByCategoryQuery } from '@/Context'
import type React from 'react'
import styled from 'styled-components'
import { CategoryTitle } from '..'
import SimpleSlider from './Slider/SimpleSlider'
import { Alert } from '@mui/material'

interface Props {
  catName: string
}

const Carrusel: React.FC<Props> = (p: Props) => {
  const { catName } = p
  const {
    data: videos,
    isLoading,
    isSuccess
  } = useGetVideosByCategoryQuery(catName)

  if (isLoading) {
    return (
      <StyledCarrusel>
        <div>Loading...</div>
      </StyledCarrusel>
    )
  }

  if (isSuccess) {
    return (
      <StyledCarrusel>
        <CategoryTitle color='#F6FF'>{catName}</CategoryTitle>
        <SimpleSlider videoData={videos} />
      </StyledCarrusel>
    )
  } else {
    return (<Alert sx={{ width: '100%' }} color='error'>No se pudo cargar la pagina</Alert>)
  }
}

const StyledCarrusel = styled.div`
display:flex;
flex-flow:column nowrap;
justify-content: end;
width: 98%;
`

export default Carrusel
