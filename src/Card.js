import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  getTagsArray(tagsString) {
    return tagsString.split(' ');
  }

  extractAuthor(s) {
    var span= document.createElement('span');
    span.innerHTML= s;
    return span.textContent || span.innerText;
  }

  render() {
    var tags = this.getTagsArray(this.props.tags).map(function(tag, index) {
      var tagLink = "https://www.flickr.com/tags/" + tag;
      return <a key={ index } className="tags-list" target="_blank" href={ tagLink }>{ tag }</a>;
    });

    var tagTitle = this.props.tags ? <h5 className="tags-title">Tags:</h5> : null;

    var author = this.extractAuthor(this.props.description.substring(0, this.props.description.indexOf('posted')).trim());

    var dateTime = this.props.date.split('T');
    var date = dateTime[0];
    var time = dateTime[1];

    return (
      <div className="card">
        <img src={ this.props.imageLink } alt='' className="main-image" />
        <div className="photo-details">
          <a href={ this.props.imagePage } target="_blank" className="photo-title">{ this.props.title.trim() }</a>
          <p className="text-anchor">&nbsp;by&nbsp;</p>
          <a href="http://www.google.com" target="_blank" className="photo-author">{ author }</a>
          <div className="date">
            <p className="date-time-title">Date</p>{date}
          </div>
          <div className="time">
            <p className="date-time-title">Time</p>{time}
          </div>
        </div>
        <div className="tags">
          { tagTitle }{ tags }
        </div>
      </div>
    );
  }
}

export default Card;
