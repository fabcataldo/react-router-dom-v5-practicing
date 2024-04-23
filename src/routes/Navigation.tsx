import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

import logo from '../logo.svg';
import { routes } from './routes';
import { Suspense } from 'react';

export const Navigation = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {
                //el exact en el navlink no está, ya que está el /lazyload como un modulo de pages tipo lazyloads
                //entonces para que se active el nav-active en el classname, tenes que sacar el exact
                routes.map(({ path, name }) => (
                  <li key={path}>
                    <NavLink
                      to={path}
                      activeClassName="nav-active">
                      {name}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            {
              routes.map(({ path, component: Component }) => (
                <Route
                  path={path}
                  key={path}
                  render={() => <Component></Component>}>
                </Route>
              ))
            }
            <Redirect to={routes[0].path} />
          </Switch>
        </div>
      </Router>
    </Suspense>

  );
}