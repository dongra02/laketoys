import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavBarStyled = styled.div`
  display: flex;
  justify-content: space-around;
`

const NavBar = () => {

  return(
    <>
      <Link to='/'>Search Toys</Link>
      <Link to='/profile'>Profile</Link>
    </>
  )
}

export default NavBar