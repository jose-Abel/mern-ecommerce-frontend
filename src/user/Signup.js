import React, { useState } from 'react';
import Layout from '../core/Layout';
import { API } from "../config";

const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: false
  });

  const { name, email, password, success, error } = values;

  const handleChange = name => event => {
    setValues({ 
      ...values, 
      error: false, 
      [name]: event.target.value 
    });
  }

  const signup = user => {
    return fetch(`${API}/signup`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(response => {
      return response.json()
    })
    .catch(err => {
      console.log(err);
    })
  }

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({...values, error: false})
    signup({ name, email, password })
    .then(data => {
      if (data.error) {
        setValues({...values, error: data.error, success: false});
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          success: true
        })
      }
    })
  }

  const signUpForm = () => (
    <form>
      <div className='form-group'>
        <label className="text-muted">Name</label>

        <input 
          type="text" 
          className='form-control' 
          onChange={handleChange('name')}
          value={name}
        />
      </div>

      <div className='form-group'>
        <label className="text-muted">Email</label>

        <input 
          type="email"
          className='form-control' 
          onChange={handleChange('email')} 
          value={email}
        />
      </div>

      <div className='form-group'>
        <label className="text-muted">Password</label>

        <input 
          type="password" 
          className='form-control' 
          onChange={handleChange('password')} 
          value={password}
        />
      </div>

      <button className='btn btn-primary' onClick={clickSubmit} >
        Submit
      </button>
    </form>
  )

  const showError = () => (
    <div 
      className='alert alert-danger'
      style={{display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div 
      className='alert alert-info'
      style={{display: success ? "" : "none" }}
    >
      New account is created. Please signin
    </div>
  );

  return (
    <Layout 
      title="Signup"
      description="Signup to Node React E-Commerce App"
      className="container col-md-8 offset-md-2"
    >
      {showSuccess()}
      {showError()}
      {signUpForm()}

    </Layout>
  )
}

export default Signup;