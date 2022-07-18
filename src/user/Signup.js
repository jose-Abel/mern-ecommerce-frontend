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

  const handleChange = name => event => {
    setValues({ 
      ...values, 
      error: false, 
      [name]: event.target.value 
    });
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

      <button className='btn btn-primary'>
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

      { JSON.stringify(values) }
    </Layout>
  )
}

export default Signup;