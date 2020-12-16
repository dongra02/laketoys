import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ToyIndex from './components/toys/ToyIndex'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ToyIndex} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
