import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import styled from 'styled-components';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './common/Contact';
import Profile from './Profile';
import NavBar from './common/NavBar';
import ScrollToTop from '../hooks/useScrollToTopHook';

const App = () => {
  return (
    <Wrapper>
      <Router>
        <ScrollToTop />
        <NavBar />
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
      <Contact />
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

export default App;
