import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, useParams, useRouteMatch } from 'react-router-dom';

import './News.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';

import LoadNews from '../pages/news/LoadNews';
import CreateNews from '../pages/news/CreateNews';

const News = () => {
  let { path, url } = useRouteMatch();

  return(
    <div className="News text-center">
      <h3>NOTICIAS</h3>
      <Nav className="justify-content-center">
        <NavLink className="mr-3" to={ `${url}/listado` }>
          Listado
        </NavLink>
        <NavLink to={ `${url}/crear` }>
          Crear
        </NavLink>
      </Nav>

      <Switch>
        <Route exact path={path}>
          <LoadNews />
        </Route>
        <Route path={`${path}/:option`}>
          <Switcher />
        </Route>
      </Switch>
      
    </div>
  );
}

const Switcher = () => {
  let { option } = useParams();

  switch(option){
    case "listado":
      return(
        <LoadNews />
      );

    case "crear":
      return(
        <CreateNews />
      );

    default:
      return(
        <div>
          <h3>Invalid option</h3>
          <p>{ option }</p>
        </div>
      );
  };

}

export default News;
