import React from 'react'
import { getToys } from '../../lib/api'

class ToyIndex extends React.Component {
  state = {
    toys: null,
    filteredToys: null,
    loading: true,
    error: null
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
    const { filteredToys, loading, error } = this.state
    if (!filteredToys) return null

    return (
      <>
        {loading && <p>currently loading</p>}
        {error && <p>Don you need to fix this error and set up an error landinge page</p>}
        {filteredToys && filteredToys.map(toy => {
          // create a result list component feed toys as toys props
          // create a list item componenent and map the toys as props (spread toy)
          // style list item how to appear
          // style list how to behave
          return (
            <>
            <h3>{toy.name}</h3>
            <img src={toy.images} alt='rental toy'/>
            </>
          )
        })}
      </>
    )
  }
}

export default ToyIndex