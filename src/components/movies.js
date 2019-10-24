import React from 'react';
import MovieItem from './movieitem';

class Movies extends React.Component {

  render(){//bit that display on screen
    return this.props.myMovies.map((movie)=>{
        console.log(movie);

        return <MovieItem key={movie.Poster} movie = {movie}></MovieItem>//need to 'return' each item/object from map
    });
    
}
        
}

export default Movies;