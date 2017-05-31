import React from 'react';
import ReactDOM from 'react-dom';
import NewsItem from './js/NewsItem';
import $ from 'jquery';
import 'whatwg-fetch';

import './css/index.css';

fetch('/json/items.json')
  .then(function (response) {
    return response.json()
  }).then(function (json) {
    console.log('items', json);
    ReactDOM.render(<NewsItem item={json[0]} rank={1}/>, $('#content')[0]);
  }).catch(function (ex) {
    console.error(ex);
  });
