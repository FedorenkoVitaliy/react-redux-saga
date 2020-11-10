import React from 'react';
import { render } from 'react-dom';
import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import App from './App';
import { rootReducer } from "./redux/rootReducer";
import {forbiddenWordsMiddleware} from "./redux/middleware";

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk, forbiddenWordsMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

