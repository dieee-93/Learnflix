import GlobalStyle from '@/GlobalStyle'
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/img/aluraflix-logo.png'
import { Button, HeaderLogo } from '../UI'
import { blackColors, grayColors } from '../UI/variables'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 18px 50px;
  box-sizing: border-box;
  background-color: ${blackColors.dark};
  box-shadow: 0px 4px 4px 0px #00000040;
  border: 1px solid #000000;
  height: 94px;
`

const HeaderBtn = styled(Button)`
  background-color: ${blackColors.dark};
  color: ${grayColors.light};
  border-color: ${grayColors.light};
  border: 1px solid;
  padding: 0px 32px;
  font-size: 21px;
  font-weight: 400;
  cursor: pointer;
`

const Header = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Nav>
        <Link to='/'>
          <HeaderLogo src={logo} />
        </Link>

        <Link to='/newvideo'>
          <HeaderBtn>Nuevo Video</HeaderBtn>
        </Link>
      </Nav>
      <Outlet />
    </>
  )
}

export default Header
