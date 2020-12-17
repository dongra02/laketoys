import React from 'react'
import { getToys } from '../../lib/api'
import ToyGrid from './ToyGrid'

class ToyIndex extends React.Component {
  state = {
    toys: null,
    filteredToys: null,
    loading: true,
    error: null,
    query: null,
    view: 'grid'
  }
  
  componentDidMount = async () => {
    try {
      const response = await getToys()
      this.setState({ toys: response.data, filteredToys: response.data, loading: false })
    } catch (error) {
      this.setState({error})
    }
  }

  render() {
    const { filteredToys, loading, error, view } = this.state
    if (!filteredToys) return null

    return (
      <>
        { loading && <p>currently loading</p> }
        { error && <p>Don you need to fix this error and set up an error landinge page</p> }
        { filteredToys && view === 'grid' && <ToyGrid toys={filteredToys} /> }
        { filteredToys && view === 'map' && <h1>Put the map here instead</h1> }
      </>
    )
  }
}

export default ToyIndex