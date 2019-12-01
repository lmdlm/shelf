import React from 'react';
import axios from 'axios';

class Create extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      Genre: '',
      Year: '',
      Cover: '',
    };

    this.handleChangeBookGenre = this.handleChangeBookGenre.bind(this);
    this.handleChangeBookYear = this.handleChangeBookYear.bind(this);
    this.handleChangeBookCover = this.handleChangeBookCover.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    }

    axios.post('http://localhost:4000/api/books', bookObject)
      .then()
      .catch();

    this.setState({
      Genre: '',
      Year: '',
      Cover: ''
    })
  }
  render() {
    return (
      <div>
        <h1>Here You Can Add New Book To Your List</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>
              Book Genre:
            </label>
            <input type="text" className='form-control' value={this.state.Genre} onChange={this.handleChangeBookGenre} />
          </div>

          <div className='form-group'>
            <label>
              Book Year:
          </label>
          </div>
          <div>
            <input type="text" className='form-control' value={this.state.Year} onChange={this.handleChangeBookYear} />
          </div>

          <div className='form-group'>
            <div>
            <label>
              Book Cover (URL):
            </label>
            </div>
            <textarea
              rows='3'
              value={this.state.Cover}
              onChange={this.handleChangeBookCover}>
            </textarea>
          </div>

          <div>
            <input type="submit" value="Add New Book" className='form-control' />
          </div>

        </form>
      </div>
    )
  }
}
export default Create;