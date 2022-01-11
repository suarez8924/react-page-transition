import { Route } from 'react-router-dom';
import { Switch, useLocation } from 'react-router';
import routes from './data/routes';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        timeout={1000}
        classNames='page'
        key={location.key}
        unmountOnExit
      >
        <Switch location={location}>
          {routes.map(({ path, name, Component }) => (
            <Route key={name} path={path} exact>
              <Component />
            </Route>
          ))}
          <Route key='other' path='*'>
            <p className='copy copy-large'>Not found</p>
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
