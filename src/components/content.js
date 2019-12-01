import React from 'react';
import axios from 'axios';
import '../App.css';

class Content extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      UserName: '',
      UserEmail: '',
    };

    this.handleChangeUserName = this.handleChangeUserName.bind(this);
    this.handleChangeUserEmail = this.handleChangeUserEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUserName(e) {
    this.setState({ UserName: e.target.value });
  }

  handleChangeUserEmail(e) {
    this.setState({ UserEmail: e.target.value });
  }

  handleSubmit(e) {
    alert('User Name: ' + this.state.UserName + " User Email: " + this.state.UserEmail);
   
    e.preventDefault();

    const userObject = {
      username: this.state.UserName,
      useremail: this.state.UserEmail
    }

    axios.post('http://localhost:4000/api/users', userObject)
      .then()
      .catch();

    this.setState({
      UserName: '',
      UserEmail: ''
    })
  }

  render() {
    return (

      <html>
        <head>
          <title> Signup Form </title>

          <link rel="stylesheet" type="text/css" href="style.css" />

        </head>
        <body>

          <br />
          <br />
          <br />
          <div class="container" >
            <div class="row">
              <div class="col-md-3">

              </div>

              <div class="col-md-6 main">

                <form onSubmit={this.handleSubmit}>

                  <h1> Signup </h1>
                    <div className="form-group">
                  <input className='form-control' type="text" name="name" id="name"
                    placeholder="Name" required value={this.state.UserName} onChange={this.handleChangeUserName} /><br />

                  <input className='form-control' type="email" name="email" id="email"
                    placeholder="E-Mail" required value={this.state.UserEmail} onChange={this.handleChangeUserEmail} /><br />
                    </div>
                  <br />
                  <input type="submit" id="submitDetails"
                    name="submitDetails" value="Submit" className='form-control'/><br />
                     

                </form>

              </div>


              <div class="col-md-3">
              </div>

            </div>
          </div>
        </body>
      </html>

    );
  }
}

export default Content;
