import React from 'react';
import './App.css';
import { Header } from './Header.js';
import { Nav } from './Nav.js';
import { About } from './About.js';
import { Contact } from './Contact.js';
import { Footer } from './Footer.js';

class App extends React.Component {
  
  render() {
    return (
      <>
        <Header />
        <Nav />
        <About />
        <Contact />
        <Footer /> 
      </> 
      
      //<div>Under Construction</div>
    );
  }
}

export default App;
