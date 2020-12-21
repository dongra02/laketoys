import React from 'react'
import { logIn } from '../../lib/api'

class LogInForm extends React.Component {

state = {
  formData: {
    email: '',
    password: ''
  },
  errors: {}
}

handleChange = (e) => {
  const formData = { ...this.state.formData, [e.target.id]: e.target.value }
  this.setState({ formData })
}

handleSubmit = async (e) => {
  e.preventDefault()
  try {
    const response = await logIn(this.state.formData)
    localStorage.setItem('token', response.data.token)
    this.props.onLogin()
    // add in conditional for mode is register new user vs login
  } catch (err) {
    // store in state after seeing response
    console.log(err.message)
  }
}

render() {
  const { email, password } = this.state.formData
  return (
    <form onSubmit={this.handleSubmit}>
      <input id='email' value={email} placeholder='email' onChange={this.handleChange}/>
      <input id='password' value={password} placeholder='password' onChange={this.handleChange}/>
      <button type='submit'>Submit</button>
    </form>
  )
  }
}

export default LogInForm