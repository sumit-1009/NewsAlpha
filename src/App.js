import './App.css';
import React from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  Switch,
  Route
} from "react-router-dom";

const App = ()=> {
  const pageSize = 9;
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/"><News key="general" pageSize={pageSize} country="in" category="general" /></Route>
          <Route exact path="/business"><News  key="business" pageSize={pageSize} country="in" category="business" /></Route>
          <Route exact path="/entertainment"><News key="entertainment" pageSize={pageSize} country="in" category="entertainment" /></Route>
          <Route exact path="/general"><News key="general" pageSize={pageSize} country="in" category="general" /></Route>
          <Route exact path="/health"><News key="health" pageSize={pageSize} country="in" category="health" /></Route>
          <Route exact path="/science"><News key="science" pageSize={pageSize} country="in" category="science" /></Route>
          <Route exact path="/sports"><News key="sports" pageSize={pageSize} country="in" category="sports" /></Route>
          <Route exact path="/technology"><News key="technology" pageSize={pageSize} country="in" category="technology" /></Route>
        </Switch>
      </div>
    )
  
}

export default App