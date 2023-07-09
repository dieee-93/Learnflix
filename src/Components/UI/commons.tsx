import styled from 'styled-components'
import { colorPrimario, grayColors, bodyTypo } from './variables'

interface CategoryTitleProps {
  color: string
}

export const Button = styled.button`
  height: 54px;
  border-radius: 4px;
  background-color: ${colorPrimario};
`
export const SecButton = styled.button`
  height: 54px;
  border-radius: 4px;
  background-color: ${grayColors.medium};
`

export const HeaderLogo = styled.img`
  object-fit: fill;
  height: 40px;
`

export const CategoryTitle = styled.h2<CategoryTitleProps>`
  color: ${p => p.color};
  font-size: ${bodyTypo.medium};
  justify-content: center;
  padding: 10px 10px
`
