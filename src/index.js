import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter, Route } from 'react-keeper';
import List from './list';
import Details from './detail';

const routing = (
    <HashRouter>
      <div>
        <Route cache path="/" component={App} />
        <Route path="/list" component={List} />
        <Route path="/details/:id" component={Details} />
      </div>
    </HashRouter>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
