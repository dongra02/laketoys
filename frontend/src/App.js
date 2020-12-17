import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Banner from './components/common/Banner'
import ToyIndex from './components/toys/ToyIndex'

const App = () => {
  return (
    <BrowserRouter>
      <Banner />
      <Switch>
        <Route exact path='/' component={ToyIndex} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
