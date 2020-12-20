import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NavLink from '../elements/NavLink'
import LogInForm from '../common/LogInForm'
import React from 'react'

const NavBarStyled = styled.div`
  display: flex;
  justify-content: space-around;
`

class NavBar extends React.Component {

  state = {
    displayForm: false,
  }

  handleDisplay = () => {
    this.setState({ displayForm: !this.state.displayForm })
  }


  render () {
    return(
      <NavBarStyled>
        <NavLink to='/' label='Search Toys' />
        <NavLink to='/profile' label='Profile' />
        <button onClick={this.handleDisplay}>Log In</button>
        {this.state.displayForm && <LogInForm />}
      </NavBarStyled>
      // <>
      //   <Link to='/'>Search Toys</Link>
      //   <Link to='/profile'>Profile</Link>
      // </>
    )
  }
}

export default NavBar