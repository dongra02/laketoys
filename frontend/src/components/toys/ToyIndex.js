import React from 'react'
import useFetch from '../../utils/useFetch'
import { getToys } from '../../lib/api'

const ToyIndex = () => {
  const { data, error, loading } = useFetch(getToys)

  console.log(data)

  return (
    <h1>This will be Toy Index</h1>
  )
}

export default ToyIndex