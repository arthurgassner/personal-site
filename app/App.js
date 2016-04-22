import React, {Component} from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Stats from './components/Stats';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <div className="container">
        {/* <Nav/> */}
        <Stats/>
        <div className="container">
          <About/>
          <Contact/>
        </div>
      </div>
    );
  }
}

export default App;