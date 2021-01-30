import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, NavLink, useParams, useRouteMatch } from 'react-router-dom';
import './News.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';

import LoadNews from '../pages/news/LoadNews';
import LoadOne from '../pages/news/LoadOne';
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
        <Route path={ `${ path }/listado` }>
          <LoadNews />
        </Route>
        <Route path={ `${ path }/leer/:id` }>
          <LoadOne />
        </Route>
        <Route path={ `${ path }/crear` }>
          <CreateNews />
        </Route>
      </Switch>
      
    </div>
  );
};

export default News;
