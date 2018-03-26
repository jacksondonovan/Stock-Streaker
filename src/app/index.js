import React from 'react';
import { render } from 'react-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

render (
  <App />,
  window.document.getElementById('root')
);
