import React, { Component } from 'react';
import './RefreshBar.css';

class RefreshBar extends Component {
  render() {
    return (
      <div className="refresh-bar">
        <button className="refresh-button" onClick={ this.props.handler }>REFRESH</button>
      </div>
    );
  }
}

export default RefreshBar;
