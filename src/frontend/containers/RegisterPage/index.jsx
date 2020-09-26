/* eslint no-console: ["error", { allow: ["log", "err"] }] */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["handleRegister"] }] */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './styles.scss';
import axios from 'axios';
import map from '../../store/map';
import history from '../../router/history';

class RegisterPage extends React.Component {
  constructor() {
    super();

    this.handleRegister = this.handleRegister.bind(this);

    this.state = {
      error: '',
    };
  }

  errorMessage() {
    const { error } = this.state.error;
    return error;
  }

  handleRegister(e) {
    e.preventDefault();
    /* This method handles registration of a new user by sending the user credentials to the
        corresponding endpoint and redirecting to the login page. */

    const credentials = {
      email: document.getElementById('email').value,
      password: btoa(document.getElementById('password').value),
    };

    /* Firebase handles input validation, like existing email, weak password etc. */
    axios
      .post('/api/register', credentials)
      .then((res) => {
        /* If res.data.status is true, registration was successful.
              Else, display the error message. */
        if (res.data.status) {
          console.log(res.data.message);
          history.push('/login');
        } else {
          this.setState({ error: res.data.message });
        }
      })
      .catch((err) => console.err(err));
  }

  render() {
    return (
      <div id="register-page">
        <h1>timbr Register Page!</h1>
        <p>{this.errorMessage}</p>
        <form
          id="register-form"
          onSubmit={this.handleRegister}
        >

          <input
            id="email"
            type="text"
            placeholder="Email"
          />

          <input
            id="password"
            type="password"
            placeholder="Password"
          />

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default connect(map)(withRouter(RegisterPage));
