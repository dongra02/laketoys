import styled from 'styled-components'

const UserDetailStyled = styled.div`
  width: 30%;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const UserDetail = ({ user }) => {

  return(
    <UserDetailStyled>
      <h1>{user.username}</h1>
      <p>Info will populate</p>
    </UserDetailStyled>
  )
}

export default UserDetail