import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import Service from '~/util/request';
import clientMiddleware from './middleware/clientMiddleware';
import reducer from './reducer';

export default function configureStore(history, initialState = {}) {
  if (!history) {
    history = createBrowserHistory({ basename: '/' });
  }

  // middlewares
  const routerMiddleware = createRouterMiddleware(history);

  // async reduces middleware
  const middlewares = [clientMiddleware(new Service()), routerMiddleware, thunk];

  // ONLY in dev environment and if we have redux devtools installed hook into it.
  const reduxDevtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ || window.devToolsExtension;
  if (reduxDevtoolsExtension) {
    const enhancer = compose(applyMiddleware(...middlewares), reduxDevtoolsExtension());
    return createStore(reducer, initialState, enhancer);
  }

  const enhancer = compose(applyMiddleware(...middlewares));
  return createStore(reducer, initialState, enhancer);
}
