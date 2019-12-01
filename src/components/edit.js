import React from 'react';
import axios from 'axios';

class Edit extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      Genre: '',
      Year: '',
      Cover: '',
      _id: ''
    };

    this.handleChangeBookGenre = this.handleChangeBookGenre.bind(this);
    this.handleChangeBookYear = this.handleChangeBookYear.bind(this);
    this.handleChangeBookCover = this.handleChangeBookCover.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
   
    axios.get('http://localhost:4000/api/books/' + this.props.match.params.id)
      .then((response) => {
        this.setState({
          _id: response.data._id,
          Genre: response.data.genre,
          Year: response.data.year,
          Cover: response.data.cover
        });
      })
      .catch();
  }

  handleChangeBookGenre(e) {
    this.setState({ Genre: e.target.value });
  }

  handleChangeBookYear(e) {
    this.setState({ Year: e.target.value });
  }

  handleChangeBookCover(e) {
    this.setState({ Cover: e.target.value });
  }

  handleSubmit(e) {
    alert('Book Genre: ' + this.state.Genre + " Year: " + this.state.Year + " Cover: " + this.state.Cover);
    
    e.preventDefault();

    const bookObject = {
      genre: this.state.Genre,
      year: this.state.Year,
      cover: this.state.Cover
    };

    axios.put('http://localhost:4000/api/books/' + this.state._id, bookObject)
    .then()
    .catch()
      this.setState({
        Genre: '',
        Year: '',
        Cover: '',
        _id: ''
      });

    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <h3>Here You Can Edit Book Details!!!</h3>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>
              Book Genre:
            </label>
            <input type='text' className='form-control' value={this.state.Genre} onChange={this.handleChangeBookGenre}>
            </input>
          </div>

          <div className='form-group'>
            <label>
              Book Year:
            </label>
          </div>
          <div>
            <input type='text' className='form-control' value={this.state.Year} onChange={this.handleChangeBookYear}/>
          </div>

          <div className='form-group'>
            <div>
            <label>
              Book Cover (URL):
            </label>
            </div>
            <textarea rows='3'
             value={this.state.Cover} 
             onChange={this.handleChangeBookCover}>
            </textarea>
          </div>

          <div>
            <input type="submit" value="Submit Changes" className='form-control'/>
          </div>

        </form>
      </div>
    );
  }
}

export default Edit;