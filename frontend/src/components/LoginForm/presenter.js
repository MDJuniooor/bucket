import React from "react";
import PropTypes from "prop-types";
import './LoginForm.css';
import { Link } from 'react-router-dom';
import Banner from '../Banner';
import BucketBox from '../BucketBox';

const LoginForm = props => props.isLoggedIn ? <div><Banner /><BucketBox /></div>:(
    <form
      className="FormBox"
      onSubmit={props.handleSubmit}
      method="post"
    >
    {console.log(props)}
    <div className="FormContainer">
      <h1 className="title">로그인하고 더 많은 꿈을 밀어주세요</h1>
      <input
        className="TextBox"
        type="text"
        placeholder="Username"

        onChange={props.handleInputChange}
        name="username"
        value={props.usernameValue}
      />
      <input
        className="TextBox"
        type="password"
        placeholder="Password"

        onChange={props.handleInputChange}
        name="password"
        value={props.passwordValue}
      />
        <input
          className="LoginBtn"
          type="submit"
          value="Log in"
        />
      </div>
    </form>
);

LoginForm.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};


export default LoginForm;
