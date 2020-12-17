import styled from 'styled-components'
import header from '../../images/header.png'
import NavBar from './NavBar'

const BannerStyled = styled.div`
  background-image: url(${header});
  background-color: green;
  background-size: cover;
  background-repeat: no-repeat;
  height: 250px;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`

const Banner = () => {

  return (
    <BannerStyled>
      <NavBar />
    </BannerStyled>
  )
}

export default Banner

