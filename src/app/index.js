import React from 'react';
import { render } from 'react-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    );
  }
}

render (
  <App />,
  window.document.getElementById('root')
);
