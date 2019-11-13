import React from 'react';
import axios from 'axios';

class Edit extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      Title: '',
      Year: '',
      Poster: '',
      _id: ''
    };

    this.handleChangeMovieTitle = this.handleChangeMovieTitle.bind(this);
    this.handleChangeMovieYear = this.handleChangeMovieYear.bind(this);
    this.handleChangeMoviePoster = this.handleChangeMoviePoster.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

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

    const movieObject = {
      title: this.state.Title,
      year: this.state.Year,
      poster: this.state.Poster
      }
    axios.put('http://localhost:4000/api/movies/' + this.state._id, movieObject)
    .then()
    .catch()
      this.setState({
        Title: '',
        Year: '',
        Poster: '',
        _id: ''
      })

    e.preventDefault();
  }
  componentDidMount() {
    //alert(this.props.match.params.id);
    axios.get('http://localhost:4000/api/movies/' + this.props.match.params.id)
      .then((response) => {
        this.setState({
          _id: response.data._id,
          Title: response.data.title,
          Year: response.data.year,
          Poster: response.data.poster
        });
      })
      .catch();
  }

  render() {
    return (
      <div className="App">
        <h3>Hello From Edit!!!</h3>
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
            <textarea rows='3' value={this.state.Poster} onChange={this.handleChangeMoviePoster}>
            </textarea>
          </div>

          <div>
            <input type="submit" value="Edit" className='form-control' />
          </div>

        </form>
      </div>
    );
  }
}

export default Edit;