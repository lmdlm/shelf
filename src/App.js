import React from 'react';
import './App.css';
import Content from './components/content';
import Create from './components/create';
import Read from './components/read';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { memberExpression } from '@babel/types';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>

          </Navbar>

          <Switch>
            <Route exact path="/content" component={Content} />
            <Route path="/create" component={Create} />
            <Route path="/read" component={Read} />
           
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
