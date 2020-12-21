import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Banner from './components/common/Banner'
import ToyIndex from './components/toys/ToyIndex'
import ProfileShow from './components/profile/ProfileShow'

import { getUserProfile } from './lib/api'

class App extends React.Component {
  
  state = {
    userData: null
  }

  componentDidMount = () => {
    const token = localStorage.getItem('token')
    if (token) this.getUser()
  }

  getUser = async () => {
    try {
      const user = await getUserProfile()
      this.setState({ userData: user.data })
    } catch (err) {
      console.log(err)
    }
  }

  logOut = () => {
    localStorage.removeItem('token')
    this.setState({ userData: null })
  }

  app = {
    getUser: this.getUser,
    logOut: this.logOut
  }


  render() {
    return (
      <BrowserRouter>
        <Banner app={this.app}/>
        <Switch>
          <Route exact path='/' component={ToyIndex} />
          <Route path='/profile' component={ProfileShow} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
