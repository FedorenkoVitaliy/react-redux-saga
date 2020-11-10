import React from 'react';
import { render } from 'react-dom';
import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import createSagaMiddle from "redux-saga";
import App from './App';
import { rootReducer } from "./redux/rootReducer";
import {forbiddenWordsMiddleware} from "./redux/middleware";
import {sagaWatcher} from "./redux/sagas";

const saga = createSagaMiddle();

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk, forbiddenWordsMiddleware, saga),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

saga.run(sagaWatcher)

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

