import React, {useEffect, useState} from 'react';
import { render } from 'react-dom';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';

import About from './About.jsx';
import Ejemplo from './Ejemplo.jsx';
import NavBar from './NavBar.jsx';

function Home({info}) {
  const [dataUser, setUser] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${info}`)
      .then(response => response.json())
      .then(data => setUser(data));
  },[]);

  return (
    <div>
      <h2>Home, Soy Henry soy el estudiante {JSON.stringify(dataUser)}!!</h2>
    </div>
  );
};

const Root = (
  <Router>
    <NavBar />
      <Route exact path="/" >
        <Home />
      </Route>
      {/* <Route path="/about/other">
        <h2>About Other</h2>
      </Route> */}
      <Route strict path="/about">
        <About />
      </Route>
      <Route path="/aboutttttt">
        <h2>Aboutttttt</h2>
      </Route>
      <Route path="/about/:id" render={({match:{params:{id}}}) => <Home info={id}/>}>
        {/* <h2>About Other</h2> */}
      </Route>
      <Route path="/ejemplo">
        <Ejemplo nombre="Toni" apellido="Tralice"/>
      </Route>
  </Router>
);

render(Root, document.querySelector('#app'));

