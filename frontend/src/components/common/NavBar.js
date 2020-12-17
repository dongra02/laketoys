import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NavLink from '../elements/NavLink'

const NavBarStyled = styled.div`
  display: flex;
  justify-content: space-around;
`

const NavBar = () => {

  return(
    <NavBarStyled>
      <NavLink to='/' label='Search Toys' />
      <NavLink to='/profile' label='Profile' />
    </NavBarStyled>
    // <>
    //   <Link to='/'>Search Toys</Link>
    //   <Link to='/profile'>Profile</Link>
    // </>
  )
}

export default NavBar