import {
  BrowserRouter as Router, Link,
  Route,
  Switch
} from 'react-router-dom';
import styled from 'styled-components';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './common/Contact';
import Profile from './Profile';
import logoLight from '../assets/icons/logo-light.png';

const App = () => {
  return (
  <Wrapper>
    <Router>
      <Navigation>
        <Logo>
          <Link to={'/'}><img src={logoLight} alt={'Home Page'} title={'Home Page'}></img></Link>
        </Logo>
        <Links>
          <Link to={'/about'}>ABOUT</Link>
          <Link to={'/portfolio'}>PORTFOLIO</Link>
          <a href={'https://resume.creddle.io/resume/dmn2na5o6bs'} target="_blank" rel="noreferrer">RESUME</a>
        </Links>
      </Navigation>

      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/">
          <Profile />
        </Route>
      </Switch>
    </Router>
    <Contact></Contact>
  </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: 'Lato', sans-serif;
  background-color: #fff;
  color: #1d1d1f;
  font-size: 15px;
  height: 100%;
`

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
  Link, a {
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

export default App;
