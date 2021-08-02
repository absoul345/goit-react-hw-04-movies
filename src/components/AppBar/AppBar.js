import React, { Component } from 'react';
import Navigation from './navigation/Navigation';

export class AppBar extends Component {
  render() {
    return (
      <header>
        <Navigation />
      </header>
    );
  }
}

export default AppBar;
