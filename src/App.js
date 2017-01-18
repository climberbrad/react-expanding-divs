import React, { Component } from 'react';
import logo from './logo.svg';
import Container from './Container';
import './App.css';

var backendData = [
    {
        "title":"Section 1",
        "content":"Our content for the section 1"
    },
    {
        "title":"Section 2",
        "content":"Our content for the section 2"
    },
    {
        "title":"Section 3",
        "content":"Our content for the section 3"
    }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <Container data={backendData} />
      </div>
    );
  }
}

export default App;
