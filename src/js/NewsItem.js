import React, { Component } from 'react';
import url from 'url';
import moment from 'moment'
import '../css/NewsItem.css';

class NewsItem extends Component {
  getDomain(){
    return url.parse(this.props.item.url).hostname;
  }

  getCommentLink() {
    var commentText = 'discuss';
    if(this.props.item.kids && this.props.item.kids.length){
      commentText = this.props.item.kids.length + ' comments';
    }
    return (
      <a href={`https://news.ycombinator.com/item?id=${this.props.item.id}`}>commentText</a>
    )
  }

  getTitle() {
    return (
      <div className="newsItem-title">
        <a className="newsItem-titleLink" href={this.props.item.url}>{this.props.item.title}</a>
        <span className="newsItem-domain">
          ({this.getDomain()})
        </span>
      </div>
    )
  }

  getSubText() {
    return (
      <div className="newsItem-subtext">
        {this.props.item.score} points by <a href={`https://news.ycombinator.com/user?id=${this.props.item.by}`}>{this.props.item.by}</a> {moment.utc(this.props.item.time * 1000).fromNow()} | {this.getCommentLink()}
      </div>
    )
  }

  getRank() {
    return (
      <div className="newsItem-rank">
        {this.props.rank}.
      </div>
    );
  }

  getVote() {
    return (
      <div className="newsItem-vote">
        <a href={`https://news.ycombinator.com/vote?for=${this.props.item.id}&dir=up&whence=news`}>
          <img src="img/grayarrow2x.gif" width="10" alt="vote arrow"/>
        </a>
      </div>
    )
  }

  render(){
    return(
      <div className="newsItem">
        {this.getRank()}
        {this.getVote()}
        <div className="newsItem-itemText">
          {this.getTitle()}
          {this.getSubText()}
        </div>
      </div>
    )
  }
}

export default NewsItem;
