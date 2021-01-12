import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

import News from './routes/News';

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
          <Link to="/">
            HOME
          </Link>
        </Navbar.Brand>
      </div>
      <Navbar.Collapse id="header-menu">
        <Nav className="ml-auto font-weight-bold">
          <Link className="nav-link" to="/somos">SOMOS</Link>
          <Link className="nav-link" to="/beneficios">BENEFICIOS</Link>
          <Link className="nav-link" to="/unete">ÚNETE</Link>
          <Link className="nav-link" to="/noticias">NOTICIAS</Link>
          <Link className="nav-link" to="/contacto">CONTACTO</Link>
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
          F
          {/*<img src="images/logos/facebook.png" alt="Facebook" height="25">*/}
        </Nav.Link>
        <Nav.Link className="pl-0" href="https://www.instagram.com/sitamcocl/">
          I
          {/*<img src="images/logos/instagram.png" alt="Instagram" height="25">*/}
        </Nav.Link>
        <Nav.Link className="pl-0" href="https://www.twitter.com/sitamcocl/">
          T
          {/*<img src="images/logos/twitter.png" alt="Twitter" height="25">*/}
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
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
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

const Contact = () => {
  return (
    <div>
      <h2>Contacto</h2>
    </div>
  );
}
