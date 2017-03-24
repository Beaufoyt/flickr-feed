import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Card from './Card.js';
import Header from './Header.js';
import RefreshBar from './RefreshBar.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardData: null
    }

    this.onRefreshClick = this.onRefreshClick.bind(this);
  }

  fetchJSON() {
    $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?", (json) => {
      this.setState({
        cardData: json
      });
    });
  }

  onRefreshClick() {
    this.fetchJSON();
  }

  componentWillMount() {
    this.fetchJSON();
  }

  render() {
    var cardComponents;

    if(this.state.cardData) {
      cardComponents = this.state.cardData.items.map(function(id, index) {
        return <Card key={ index }
              imageLink={ id.media.m }
              title={ id.title }
              imagePage={ id.link }
              description={ id.description }
              tags={ id.tags }
              date={ id.date_taken }/>;
      });
    }

    return (
      <div>
        <Header />
        <RefreshBar handler={ this.onRefreshClick } />
        <ul className="Card-style">
          { cardComponents }
        </ul>
      </div>
    );
  }
}

export default App;
