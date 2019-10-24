import React from 'react';
import axios from 'axios';

class Create extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Title: '',
      Year: '',
      Poster: ''
    };

    this.handleChangeMovieTitle = this.handleChangeMovieTitle.bind(this);
    this.handleChangeMovieYear = this.handleChangeMovieYear.bind(this);
    this.handleChangeMoviePoster = this.handleChangeMoviePoster.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeMovieTitle(e) {
    this.setState({ Title: e.target.value });
  }

  handleChangeMovieYear(e) {
    this.setState({ Year: e.target.value });
  }

  handleChangeMoviePoster(e) {
    this.setState({ Poster: e.target.value });
  }

  handleSubmit(e) {
    alert('Movie Title: ' + this.state.Title + " Year: " + this.state.Year + " Poster: " + this.state.Poster);
    e.preventDefault();
    
    const movieObject = {
      title: this.state.Title,
      year: this.state.Year,
      poster: this.state.Poster
    }

  axios.post('http://localhost:4000/api/movies', movieObject)
  .then()
  .catch();
  }
  render() {
    return (
      <div>
        <h1>Hello from create component!!!</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>
              Movie Title:
        </label>
            <input type="text" className='form-control' value={this.state.Title} onChange={this.handleChangeMovieTitle} />
          </div>

          <div className='form-group'>
            <label>
              Movie Year:
      </label>
          </div>
          <div>
            <input type="text" className='form-control' value={this.state.Year} onChange={this.handleChangeMovieYear} />
          </div>

          <div className='form-group'>
            <label>
              Movie Poster URL:
        </label>
            <textarea
              rows='3'
              value={this.state.poster}
              onChange={this.handleChangeMoviePoster}>
            </textarea>
          </div>

          <div>
            <input type="submit" value="Submit" className='form-control' />
          </div>

        </form>
      </div>
    );
  }
}
export default Create;