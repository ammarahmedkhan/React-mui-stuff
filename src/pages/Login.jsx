import * as React from 'react';
import { Link } from 'react-router-dom';
// TODO remove, this demo shouldn't need to reset the theme.

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div class="column">
      <form action="">

    <h1>Login</h1>
    <p>Login to your account</p>
    <hr/>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>
    <button type="submit" class="registerbtn">Login</button>
  <div class="">
    <p>Don't have an account? <Link to="/register">Sign up</Link>.</p>
  </div>
</form> 
    </div>
  );
}
