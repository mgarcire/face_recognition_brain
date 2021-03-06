import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation/Navigation'
import Logo from './Logo/Logo'
import ImageLinkForm from './ImageLinkForm/ImageLinkForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <ImageLinkForm />
      </div>
    );
  }
}

export default App;
