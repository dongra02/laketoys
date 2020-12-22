
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


// replace shitty links with icon taht drops login/register form option if not logged in, profile or search toys if logged in
  handleDisplay = () => {
    this.setState({ displayForm: !this.state.displayForm })
  }

  // sets App state of userData, closes form
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