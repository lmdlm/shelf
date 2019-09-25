import React from 'react';
import '../App.css';

class Content extends React.Component {

  render(){
    return (
      <div className="App">
      <h2>Hello From Content!!!</h2>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Content;
