import logoLight from '../../assets/icons/logo-light.png';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <Navigation>
      <Logo>
        <a href={'/'}><img src={logoLight} alt={'Y.G. Logo'}></img></a>
      </Logo>
      <Links>
        <a href={'/about'}>ABOUT</a>
        <a href={'/portfolio'}>PORTFOLIO</a>
        <a href={'https://resume.creddle.io/resume/dmn2na5o6bs'}>RESUME</a>
      </Links>
    </Navigation>
  );
}

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  width: 100%;
`

const Logo = styled.div`
  img {
   height: 100%; 
   margin-left: 20px;
  }
`

const Links = styled.div`
    a {
      margin-right: 20px;
      color: #1d1d1f;
      text-decoration: none;
      :hover {
        text-decoration: underline;
    }
`

export default NavBar;