import React from 'react';
import './App.css';
import Content from './components/content';
import Create from './components/create';
import Shelf from './components/shelf';
import Edit from './components/edit';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar className="justify-content-center" variant="dark" bg="dark">
            
            <Nav>
              <Nav.Link href="/content">Home</Nav.Link>
              <Nav.Link href="/shelf">Shelf</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>             
            </Nav>

          </Navbar>

          <Switch>
            <Route exact path="/content" component={Content} />
            <Route path="/create" component={Create} />
            <Route path="/shelf" component={Shelf} />
            <Route path="/edit/:id" component={Edit} />           
          </Switch>
         
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
