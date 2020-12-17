const ToyGrid = ({ toys }) => {

  return (
    <>
      {toys.map(toy => {
        return (
          <>
          <h3>{ toy.name }</h3>
          <h4>{ toy.avgRating }</h4>
          </>
        )
      })}
    </>
  )
}

export default ToyGrid