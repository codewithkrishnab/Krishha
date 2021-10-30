import './App.css';
import $ from 'jquery';
import React, { useState } from 'react';
import styled from 'styled-components';
import KrishhTitle from './modules/style-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import about from './pages/about';
import login from './pages/login';
import Home from './pages/Home';



var propStyleThis = {};
console.log(propStyleThis)
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;


function App() {


  const [loadedAmsterdam, setLoadedAmsterdam] = useState(false);
  console.log('one', propStyleThis)
  loadedAmsterdam ? propStyleThis = true : propStyleThis = false;
  console.log('two', propStyleThis)
  var junction_font = new FontFace('Amsterdam Two', 'url(https://cdn.jsdelivr.net/gh/codewithkrishnab/krishh-fonts//amsterdam-two-ttf.ttf)');
  junction_font.load().then(function (loaded_face) {


    document.fonts.add(loaded_face);
    setLoadedAmsterdam(true);
    console.log(propStyleThis);
    console.log("Loaded");

  }).catch(function (error) {
    // error occurred
  });

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>

          <Route path="/about" exact component={about} />

          <Route path="/login" exact component={login} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
