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
    displayOptions: false,
  }

  handleDisplay = () => {
    this.setState({ displayForm: !this.state.displayForm })
  }

  // create handle log in function, undisplay form, set user using app.getuser
  handleLogin = async () => {
    this.props.app.getUser()
    this.setState({ displayForm: false })
  }


  render () {
    return(
      <NavBarStyled>
        <NavLink to='/' label='Search Toys' />
        <NavLink to='/profile' label='Profile' />
        <button onClick={this.handleDisplay}>{this.state.displayForm ? 'Cancel' : 'Log in'}</button>
        {this.state.displayForm && <LogInForm onLogin={this.handleLogin}/>}
      </NavBarStyled>
    )
  }
}

export default NavBar