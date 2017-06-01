import React from 'react';
import ReactDOM from 'react-dom';
import NewsList from './js/NewsList';
import $ from 'jquery';
import 'whatwg-fetch';

import './css/index.css';

fetch('/json/items.json')
  .then(function (response) {
    return response.json()
  }).then(function (json) {
    console.log('items', json);
    ReactDOM.render(<NewsList items={json} />, $('#content')[0]);
  }).catch(function (ex) {
    console.error(ex);
  });
