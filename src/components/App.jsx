import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from './Home';

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/about">
                  {/*<About />*/}
              </Route>
              <Route exact path="/portfolio">
                  {/*<Portfolio />*/}
              </Route>
              <Route exact path="/resume">
                  {/*<Resume />*/}
              </Route>
              <Route path="/">
                  <Home />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
