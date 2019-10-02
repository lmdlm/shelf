import React from 'react';
import Card from 'react-bootstrap/Card';

class MovieItem extends React.Component {

  render() {
    return (
      // <div>
      //   <h4>{this.props.movie.Title}</h4>
      //   <p>{this.props.movie.Year}</p>
      //   <img src={this.props.movie.Poster}></img>
      // </div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.movie.Poster} />
        <Card.Body>
          <Card.Title>{this.props.movie.Title}</Card.Title>
          <Card.Text>
          <p>{this.props.movie.Year}</p>
        </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default MovieItem;