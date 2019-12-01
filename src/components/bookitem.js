import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {Link} from 'react-router-dom';

class BookItem extends React.Component {

  constructor(){
    super();
    this.DeleteBook = this.DeleteBook.bind(this);
  }

  DeleteBook(e){
    console.log("Delete button clicked!!!");
    
    axios.delete('http://localhost:4000/api/books/'+this.props.book._id)
    .then(()=>{
      this.props.ReloadDataMethod();
    })
    .catch();
  }

  render() {
    return (
     <CardDeck>
        <Card bg="secondary" border="primary" text="white" style={{ width: '8rem' }}>
          <Card.Img variant="top" src={this.props.book.cover} />
          <Card.Body>
            <Card.Title>{this.props.book.genre}</Card.Title>
             <Card.Text>
              {this.props.book.year}
             </Card.Text>
          </Card.Body>
          <Link to={"/edit/" + this.props.book._id} className="btn btn-info">Edit</Link>
          <Button variant="danger" size="sm" onClick={this.DeleteBook}>Delete</Button>
        </Card>
        
      </CardDeck>        
    );
  }
}

export default BookItem;