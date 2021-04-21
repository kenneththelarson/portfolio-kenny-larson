import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>

      <div>
        <Nav></Nav>
        <main>
          <Switch>
            <Route exact path="/About" component={About} />
            <Route exact path="/Portfolio" component={Portfolio} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
