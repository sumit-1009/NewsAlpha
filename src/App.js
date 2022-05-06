import './App.css';
import NavBar from './components/NavBar';


import React from 'react'
// import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from './pages/Home';
import { Sports } from './pages/Sports';

const App = ()=> {
  // const pageSize = 9;
  
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route path="/business"><News pageSize={pageSize} country="in" category="business" /></Route>
          <Route path="/entertainment"><News pageSize={pageSize} country="in" category="entertainment" /></Route>
          <Route path="/general"><News pageSize={pageSize} country="in" category="general" /></Route>
          <Route path="/health"><News pageSize={pageSize} country="in" category="health" /></Route>
          <Route path="/science"><News pageSize={pageSize} country="in" category="science" /></Route>
          <Route path="/technology"><News pageSize={pageSize} country="in" category="technology" /></Route> */}
          <Route path="/sports"><Sports /></Route>
        </Switch>
      </Router>
    )
  
}

export default App