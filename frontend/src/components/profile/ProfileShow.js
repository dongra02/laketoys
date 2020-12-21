import styled from 'styled-components'
import UserDetail from './UserDetail'

const ProfileContainStyled = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  background-color: gray;
`

const ProfileShow = ({ user }) => {
  


  return (
    <ProfileContainStyled>
      <UserDetail user={user}/>
    </ProfileContainStyled>
  )
}

export default ProfileShow