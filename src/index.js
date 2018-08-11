import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import './style/style.min.css';

// import pages
import Home from './components/home';
import UnitConverter from './components/unit-converter';
import CurrencyConverter from './components/currency-converter';
import TimeDate from './components/timedate.js';
import TipTax from './components/tiptax.js';
import Interest from './components/interest.js';
import BillSplit from './components/billsplit.js';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/unit-convert" component={UnitConverter} />
        <Route exact path="/currency-convert" component={CurrencyConverter} />
        <Route exact path="/timedate" component={TimeDate} />
        <Route exact path="/tip-tax" component={TipTax} />
        <Route exact path="/interest" component={Interest} />
        <Route exact path="/bill-split" component={BillSplit} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
