import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Banner from './components/common/Banner'
import ToyIndex from './components/toys/ToyIndex'
import ProfileShow from './components/profile/ProfileShow'

import { getUserProfile, getUserOrders } from './lib/api'

class App extends React.Component {
  
  state = {
    userData: null,
    userOrders: null
  }

  componentDidMount = () => {
    const token = localStorage.getItem('token')
    if (token) this.getUser()
  }

  getUser = async () => {
    try {
      const user = await getUserProfile()
      this.setState({ userData: user.data }, this.getOrders)
    } catch (err) {
      console.log(err)
    }
  }

  getOrders = async () => {
    try {
      const orders = await getUserOrders()
      this.setState({ userOrders: orders.data })
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
          <Route path='/profile' render={() => <ProfileShow user={this.state.userData} orders={this.state.userOrders}/>}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
