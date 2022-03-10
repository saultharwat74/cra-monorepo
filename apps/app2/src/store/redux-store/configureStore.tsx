import reducer, { IRootReducerState } from './rootReducer';
import { applyMiddleware, compose, createStore, Middleware, Store } from 'redux';
// The redux dev tools.
import { composeWithDevTools } from 'redux-devtools-extension'; // eslint-disable-line
// The redux middlewares.
import createSagaMiddleware from 'redux-saga';
// The redux store enhancers.
import { persistStore } from 'redux-persist';
// Import the combined sagas.
import rootSaga from './rootSaga';
import { loadingBarMiddleware } from "react-redux-loading-bar";

// The application's current environment.
const isDev = process.env.NODE_ENV === 'development';

// The middlewares to be applied.
const middlewares: Middleware[] = [];

// Instantiates the saga middleware.
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);
middlewares.push(loadingBarMiddleware({
  promiseTypeSuffixes: ['REQUESTED', 'FULFILLED', 'REJECTED'],
}));

// Combine the middlewares.
const middleware = applyMiddleware(...middlewares);

const enhancerParams = [middleware];

// Compose Enhancers (With/Without Dev Tools)
const enhancer = isDev ? composeWithDevTools(...enhancerParams) : compose<any>(...enhancerParams);

// Import the combined reducer.
export const store = createStore(reducer, enhancer);

const persistedStore = () => {
  return new Promise<{ store: Store<(Action: any) => IRootReducerState> }>((res) => {
    sagaMiddleware.run(rootSaga);
    persistStore(store, {}, () => {
      res({ store })
    });
  });
};

export default persistedStore;