import styled from 'styled-components'
import { Link } from 'react-router-dom'

const LinkStyled = styled.a`
  color: #ffffff;
  font-weight: 600px;
  text-decoration: none;
  margin: 10px;
  border: 1px solid #ffffff;
  padding: 5px;
  border-radius: 2px;
`

const NavLink = (props) => {

  return (
      <Link to={props.to}><LinkStyled>{props.label}</LinkStyled></Link>
  )
}

export default NavLink