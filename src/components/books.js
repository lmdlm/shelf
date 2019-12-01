import React from 'react';
import BookItem from './bookitem';

class Books extends React.Component {

  render(){//bit that display on screen
    return this.props.myBooks.map((book)=>{
        //console.log(book);

        return <section class="main">
        <div class="container grid-custom">
           <div class = "row">
           
                  <div class= "col-xs-6">
                  {/* need to 'return' each item/object from map */}
                    <BookItem key={book._id} book = {book}
                    ReloadDataMethod={this.props.ReloadDataMethod}></BookItem>
                  </div>

                  <div class= "col-sm-6">
                    <BookItem key={book._id} book = {book}
                    ReloadDataMethod={this.props.ReloadDataMethod}></BookItem>
                  </div>

           </div>

        </div>

        </section>
    });
    
  }
        
}

export default Books;