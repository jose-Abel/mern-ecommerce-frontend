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

  const { name, email, password } = values;

  const handleChange = name => event => {
    setValues({ 
      ...values, 
      error: false, 
      [name]: event.target.value 
    });
  }

  const signup = user => {
    fetch(`${API}/signup`, {
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
    signup({ name, email, password });
  }

  const signUpForm = () => (
    <form>
      <div className='form-group'>
        <label className="text-muted">Name</label>

        <input type="text" className='form-control' onChange={handleChange('name')} />
      </div>

      <div className='form-group'>
        <label className="text-muted">Email</label>

        <input type="email" className='form-control' onChange={handleChange('email')} />
      </div>

      <div className='form-group'>
        <label className="text-muted">Password</label>

        <input type="password" className='form-control' onChange={handleChange('password')} />
      </div>

      <button className='btn btn-primary' onClick={clickSubmit} >
        Submit
      </button>   
    </form>
  )

  return (
    <Layout 
      title="Signup"
      description="Signup to Node React E-Commerce App"
      className="container col-md-8 offset-md-2"
    >
      {signUpForm()}

    </Layout>
  )
}

export default Signup;