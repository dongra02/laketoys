import styled from 'styled-components'

const UserDetailStyled = styled.div`
  width: 30%;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const UserDetail = () => {

  return(
    <UserDetailStyled>
      <h1>User Info Will Need API Call</h1>
      <p>Info will populate</p>
    </UserDetailStyled>
  )
}

export default UserDetail