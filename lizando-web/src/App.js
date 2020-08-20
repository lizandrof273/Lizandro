import React from 'react';
import './App.css';
import { Header } from './Header.js';
import { Nav } from './Nav.js';
import { About } from './About.js';

class App extends React.Component {
  
  render() {
    return (
      <>
        <Header />
        <Nav />
        <About />
      </> 
      
      //<div>Under Construction</div>
    );
  }
}

export default App;
