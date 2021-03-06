import React from 'react';
import ReactDOM from 'react-dom';
import NewsList from './js/NewsList';
import $ from 'jquery';
import _ from 'lodash';
import 'whatwg-fetch';

import './css/index.css';

fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (stories) {
    var detailDeferreds = _(stories.slice(0,30)).map(function (itemId) {
        return fetch(`https://hacker-news.firebaseio.com/v0/item/${itemId}.json`)
          .then(function (response) {
            return response.json();
          })
          .catch(function (ex) {
            console.error(ex);
          })
    }).value();
    Promise.all(detailDeferreds)
      .then(function (objects) {
        ReactDOM.render(<NewsList items={objects} />, $('#content')[0]);
      }).catch((err) => {
        console.error(err);
      });
  })
  .catch(function (ex) {
    console.error(ex);
  });
