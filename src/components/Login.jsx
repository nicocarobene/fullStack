import React from "react";
import Togglable from "./Togglable";
import PropTypes from 'prop-types'

export default function Login({
  username,
  setUsername,
  handleLogin,
  password,
  setPassword,
}) {
  
  return (
    <Togglable buttonLabel='SHOW LOGIN'>
        <form onSubmit={handleLogin}>
          <div>
            <input
              type="text"
              value={username}
              name="Username"
              placeholder="Username"
              onChange={({ target }) => {
                setUsername(target.value);
              }}
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              name="Password"
              placeholder="Password"
              onChange={({ target }) => {
                setPassword(target.value);
              }}
            />
          </div>
          <button id='form-login-button'>Login</button>
        </form>
      </Togglable>
  );
}

Login.propTypes= {
  handleLogin: PropTypes.func.isRequired,
  username: PropTypes.string
}
