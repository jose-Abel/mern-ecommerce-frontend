import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Layout from '../core/Layout';
import { signin, authenticate } from '../auth';

const Signin = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    error: '',
    loading: false,
    redirectToReferrer: false
  });

  const { email, password, loading, error, redirectToReferrer } = values;

  const handleChange = name => event => {
    setValues({ 
      ...values, 
      error: false, 
      [name]: event.target.value 
    });
  }

  const clickSubmit = (event) => {
    event.preventDefault();

    setValues({...values, error: false, loading: true });

    signin({ email, password })
    .then(data => {
      if (data.error) {
        setValues({...values, error: data.error, loading: false});
      } else {
        authenticate(data, 
          () => {
            setValues({
              ...values,
              redirectToReferrer: true
            });
          }
        )
      }
    })
  }

  const signInForm = () => (
    <form>
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

  const showLoading = () => (
    loading && (<div className='alert alert-info'><h2>Loading...</h2></div>)
  );

  const redirectUser = () => {
    if (redirectToReferrer) {
      return <Redirect to="/"/>
    }
  }

  return (
    <Layout 
      title="Signin"
      description="Signin to Node React E-Commerce App"
      className="container col-md-8 offset-md-2"
    >
      {showLoading()}
      {showError()}
      {signInForm()}
      {redirectUser()}
    </Layout>
  )
}

export default Signin;
