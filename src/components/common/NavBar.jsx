import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoLight from '../../assets/icons/logo-light.png';
import useDocumentScrollHook from '../../hooks/useDocumentScrollHook';

const NavBar = () => {
  const displayShadow = useDocumentScrollHook().scrolled;

  return (
    <Wrapper displayShadow={displayShadow}>
        <Navigation>
          <Logo>
            <Link to={'/'}><img src={logoLight} alt={'LOGO'}></img></Link>
          </Logo>
          <Links>
            <Link to={'/'}>HOME</Link>
            <Link to={'/portfolio'}>PORTFOLIO</Link>
            {/*<a href={'https://resume.creddle.io/resume/dmn2na5o6bs'} target="_blank" rel="noreferrer">RESUME</a>*/}
          </Links>
        </Navigation>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: block;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all 100ms linear 0s;
  box-shadow: ${props => props.displayShadow ? 'rgb(25 45 100 / 8%) 0px 10px 30px 0px' : 'none'};
`

const Navigation = styled.div`
  font-family: 'Lato', sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 20px 40px;
  
   @media only screen and (max-width: 768px) {
     height: 30px; 
   }
`

const Logo = styled.div`
  img {
    height: 30px;
    width: 30px;
    
    @media only screen and (min-width: 576px) {
      height: 50px;
      width: 50px;
      margin-left: 20px;
    }
  }
`

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  Link, a {
    margin-right: 20px;
    color: #1d1d1f;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
    
    @media only screen and (max-width: 768px) {
      font-size: 10px;
      margin-right: 10px;
    }
  }
`

export default NavBar;