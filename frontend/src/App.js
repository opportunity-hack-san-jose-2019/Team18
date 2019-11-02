import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Menu from './Components/Menu';

/* bootstrap, jquery, popper.js*/
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.js';
import '../src/fontawesome/css/all.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Menu />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
