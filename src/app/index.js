import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Router>
    );
  }
}

render (
  <App />,
  window.document.getElementById('root')
);
