import {
  BrowserRouter as Router, Link,
  Route,
  Switch,
} from 'react-router-dom';
import styled from 'styled-components';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './common/Contact';
import Profile from './Profile';
import logoLight from '../assets/icons/logo-light.png';
import useDocumentScrollHook from '../hooks/useDocumentScrollHook';

const App = () => {
  const displayShadow = useDocumentScrollHook().scrolled;
  return (
    <Wrapper>
      <Router>
        <Header displayShadow={displayShadow}>
          <Navigation>
            <Logo>
              <Link to={'/'}><img src={logoLight} alt={'LOGO'}></img></Link>
            </Logo>
            <Links>
              <Link to={'/'}>HOME</Link>
              <Link to={'/portfolio'}>PORTFOLIO</Link>
              <a href={'https://resume.creddle.io/resume/dmn2na5o6bs'} target="_blank" rel="noreferrer">RESUME</a>
            </Links>
          </Navigation>
        </Header>

        <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/">
            <Profile />
            <About />
          </Route>
        </Switch>
      </Router>
      <Contact></Contact>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: 'Ubuntu', sans-serif;
  background-color: #fff;
  color: #1d1d1f;
  font-size: 15px;
  height: 100%;
`

const Header = styled.header`
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
  height: 50px;
  padding: 20px 40px;
  
   @media only screen and (max-width: 768px) {
     height: 30px; 
   }
`

const Logo = styled.div`
  img {
     height: 100%; 
     margin-left: 20px;
  }
`

const Links = styled.div`
  display: flex;
  flex-direction: row;
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

export default App;
