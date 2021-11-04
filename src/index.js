import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers/reducers';
// import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);


