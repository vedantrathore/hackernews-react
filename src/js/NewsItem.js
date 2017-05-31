import React, { Component } from 'react';
import '../css/NewsItem.css';

class NewsItem extends Component {
  render(){
    return(
      <div className="newsItem">
        <a className="newsItem-titleLink" href={this.props.item.url}>{this.props.item.title}</a>
      </div>
    )
  }
}

export default NewsItem;
