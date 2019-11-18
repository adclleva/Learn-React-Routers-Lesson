import React from 'react';
import {
  BrowserRouter as Router,
  Route, // the actual route 
  Link, // how we get in between them
  Switch
} from "react-router-dom";

import About from './pages/About'
import Contact  from './pages/Contact'
import Home  from './pages/Home'
import NotFound  from './pages/NotFound'
import Tomato  from './pages/Tomato'

class App extends React.Component {
  render() {
    return (
      <Router> {/* You can only go to links that's inside the Router, all the Routes */}
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link> {/*you use link to go what file you have inside the application*/}
            </li>
            <li>
              <Link to="/tomato/beefsteak">Beefsteak</Link> 
            </li>
            <li>
              <Link to="/tomato/heirloom">Heirloom</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/tomato/:name" component={Tomato} />
            <Route component={NotFound} />
          </Switch>
          
        </div>


      </Router>

    );
  }
  
}

export default App;
