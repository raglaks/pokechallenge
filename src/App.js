import React, { Component } from 'react';
import './App.css';
import Head from './components/Head';
import GridC from './components/GridC';

class App extends Component {
  render() {
    return (
      <div>
        <Head />
        <GridC />
      </div>
    );
  }
}

export default App;
