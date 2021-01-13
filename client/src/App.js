import React from 'react';
import './App.css'
import sitamco_logo from'./img/logos/sitamco_sm.png'
import facebook_logo from'./img/logos/facebook.png'
import instagram_logo from'./img/logos/instagram.png'
import twitter_logo from'./img/logos/twitter.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useParams,
  useRouteMatch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

import News from './routes/News';
import Contact from './routes/home/Contact';


// Since routes are regular React components, they
// may be rendered anywhere in the app, including in
// child elements.
//
// This helps when it's time to code-split your app
// into multiple bundles because code-splitting a
// React Router app is the same as code-splitting
// any other React app.

export default function Home() {
  return (
    <Router>
      <div>
        <NavbarHeader />
        <MainContent />
        <Footer />
      </div>
    </Router>
  );
}

const NavbarHeader = () => {
  return (
    <Navbar bg="light" sticky="top" variant="light" expand="md" className="justify-content-between">
      <div className="navbar-header">
        <Navbar.Toggle aria-controls="header-menu" />
        <Navbar.Brand>
          <NavLink to="/">
            <img src={ sitamco_logo } alt="SITAMCO" width="150" height="40"/>
          </NavLink>
        </Navbar.Brand>
      </div>
      <Navbar.Collapse id="header-menu">
        <Nav className="ml-auto font-weight-bold">
          <NavLink className="nav-link" to="/somos">SOMOS</NavLink>
          <NavLink className="nav-link" to="/beneficios">BENEFICIOS</NavLink>
          <NavLink className="nav-link" to="/unete">ÚNETE</NavLink>
          <NavLink className="nav-link" to="/noticias">NOTICIAS</NavLink>
          <NavLink className="nav-link" to="/contacto">CONTACTO</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const MainContent = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/somos">
        <WeAre />
      </Route>
      <Route path="/beneficios">
        <Benefits />
      </Route>
      <Route path="/unete">
        <JoinUs />
      </Route>
      <Route path="/noticias">
        <News />
      </Route>
      <Route path="/contacto">
        <Contact />
      </Route>
    </Switch>
  );
};

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3">
      <Nav className="justify-content-center">
        <Nav.Link className="pl-0" href="https://www.facebook.com/sitamco/">
          <img src={ facebook_logo } alt="Facebook" height="25"/>
        </Nav.Link>
        <Nav.Link className="pl-0" href="https://www.instagram.com/sitamcocl/">
          <img src={ instagram_logo }alt="Instagram" height="25"/>
        </Nav.Link>
        <Nav.Link className="pl-0" href="https://www.twitter.com/sitamcocl/">
          <img src={ twitter_logo } alt="Twitter" height="25"/>
        </Nav.Link>
      </Nav>
    </footer>
  );
}

function Main() {
  return (
    <div>
      <h2>Main</h2>
    </div>
  );
}

const WeAre = () => {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Somos</h2>
      <ul>
        <li>
          <NavLink to={`${url}/rendering`}>Rendering with React</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/components`}>Components</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/props-v-state`}>Props v. State</NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}


function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}

const Benefits = () => {
  return (
    <div>
      <h2>Beneficios</h2>
    </div>
  );
}

const JoinUs = () => {
  return (
    <div>
      <h2>Unete</h2>
    </div>
  );
}


