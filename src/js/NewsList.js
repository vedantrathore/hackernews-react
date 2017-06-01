import _ from 'lodash';
import NewsHeader from './NewsHeader';
import NewsItem from './NewsItem';
import React, { Component } from 'react';
import '../css/NewsList.css'

class NewsList extends Component {
  getMore() {
    return (
      <div className="newsList-more">
        <a href="https://news.ycombinator.com/news?p=2" className="newsList-moreLink">More</a>
      </div>
    );
  }

  render() {
    return (
      <div className="newsList">
        <NewsHeader/>
        <div className="newsList-newsItems">
          {_(this.props.items).map(function (item, index) {
            return <NewsItem key={item.id} item={item} rank={index + 1}/>;
          }.bind(this)).value()}
        </div>
        {this.getMore()}
      </div>
    );
  }
}

export default NewsList;
