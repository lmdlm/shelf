import React from 'react';
import Books from './books';
import axios from 'axios';

class Shelf extends React.Component {

  constructor(){
    super();
    this.ReloadDataMethod = this.ReloadDataMethod.bind(this);
    }

    state={
      books:[]
    };

    componentDidMount() {
      axios.get('http://localhost:4000/api/books')
      .then((response)=>{
        this.setState({books:response.data.book})
      })
      .catch((error)=>{
        console.log(error);
      });
    }

    ReloadDataMethod(){
      axios.get('http://localhost:4000/api/books')
      .then((response)=>{
          this.setState({books: response.data.book})
      })
      .catch((error)=>{
          console.log(error);
      });
  }

  render(){
    return (
      <div>
      <h2>Here You Can View Your Books</h2>
      <Books myBooks={this.state.books} ReloadDataMethod={this.ReloadDataMethod}></Books>
      </div>
    );
  }
}

export default Shelf;