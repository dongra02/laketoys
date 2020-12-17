import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LinkStyled = styled.a`
  color: #ffffff;
  font-weight: 600px;
  text-decoration: none;
  margin: 0 10px;
`

const NavLink = (props) => {

  return (
    <LinkStyled>
      <Link to={props.to}>{props.label}</Link>
    </LinkStyled>
  )
}

export default NavLink