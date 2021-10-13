import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import About from './About';

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/About">
                  <About />
              </Route>
              <Route exact path="/portfolio">
                  {/*<Portfolio />*/}
              </Route>
              <Route exact path="/resume">
                  {/*<Resume />*/}
              </Route>
              <Route path="/">
                  <About />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
