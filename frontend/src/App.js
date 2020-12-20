import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Banner from './components/common/Banner'
import ToyIndex from './components/toys/ToyIndex'
import ProfileShow from './components/profile/ProfileShow'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Banner />
        <Switch>
          <Route exact path='/' component={ToyIndex} />
          <Route path='/profile' component={ProfileShow} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
