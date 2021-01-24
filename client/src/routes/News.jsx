import React from 'react';
// eslint-disable-next-line
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
      <h3 className="mt-3">NOTICIAS</h3>
      <Nav className="justify-content-around">
        <NavLink to={ `${ url }/listado` }>
          Listado
        </NavLink>
        <NavLink to={ `${ url }/crear` }>
          Crear
        </NavLink>
      </Nav>

      <hr />

      <Switch>
        <Route path={`${ path }/:option`}>
          <NewsSwitcher />
        </Route>
      </Switch>
      
    </div>
  );
};

const NewsSwitcher = () => {
  let { option } = useParams();

  switch(option){
    case "listado":
      return(
          <div><LoadNews /></div>
        );
      case "crear":
        return(
          <div><CreateNews /></div>
        );
      default:
        return(
          <div>Invalid option: { option }</div>
        );
  };
};

export default News;
