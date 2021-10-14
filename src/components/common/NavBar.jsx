import logoLight from '../../assets/icons/logo-light.png';
import styled from 'styled-components';

const NavBar = () => {
  return (
    <Navigation>
      <Logo>
        <a href={'/'}><img src={logoLight} alt={'Home Page'} title={'Home Page'}></img></a>
      </Logo>
      <Links>
        <a href={'/about'}>ABOUT</a>
        <a href={'/portfolio'}>PORTFOLIO</a>
        <a href={'https://resume.creddle.io/resume/dmn2na5o6bs'} target="_blank" rel="noreferrer">RESUME</a>
      </Links>
    </Navigation>
  );
}

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  padding: 20px;
  img {
   height: 100%; 
  }
`

const Logo = styled.div`
  img {
   margin-left: 20px;
  }
`

const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  a {
    margin-right: 20px;
    color: #1d1d1f;
    text-decoration: none;
    :hover {
      text-decoration: underline;
      color: #250d53;
    }
    
    @media only screen and (max-width: 768px) {
      font-size: 10px;
      margin-right: 10px;
    }
  }
`

export default NavBar;