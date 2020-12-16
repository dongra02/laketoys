import React from 'react'

const initialState = {
  data: null,
  error: null,
  loading: true,
}

const useFetch = (request, params=null) => {
  const [state, setState] = React.useState(initialState)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await request(params)
        setState({ error: null, data, loading: false })
      } catch (err) {
        setState({ error: true, data: null, loading: false })
      }
    }
    getData()
    console.log('request sent')
  }, [request, params])

  return state
}

export default useFetch