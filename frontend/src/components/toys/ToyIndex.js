import React from 'react'
import useFetch from '../../utils/useFetch'
import { getToys } from '../../lib/api'

const ToyIndex = () => {
  const { data, error, loading } = useFetch(getToys)

  console.log(data)

  return (
    <>
    {loading && <p>currently loading</p>}
    {error && <p>Don you need to fix this error and set up an error landinge page</p>}
    {data && data.map(toy => {
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

export default ToyIndex