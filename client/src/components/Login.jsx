import React from 'react';
import { useFormik } from 'formik';

/* The code block is defining a function component named `login`. Inside the `login` function, it is
using the `useFormik` hook from the `formik` library to initialize the form state and event
handlers. */
const login = () => {

const { handleSubmit, handleChange } = useFormik({
  initialValues: {
    user: '',
    password: ''
  },
  onSubmit: (values) => {
    console.log(values);
  },
});

/* The `return` statement in the `login` function is returning JSX code, which represents the structure
and content of the login component. */
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className='loginInputs'>
          <input className='inputLogin' type="user" placeholder='user' name='user' onChange={handleChange} />
          <input className='inputLogin' type="password" placeholder='password' name='password' onChange={handleChange} />
        </div>
       
        <div className='contentBtns'>
          <button className='btn' type='login'>Login</button>
          <button className='btn' type='singUp'>Sign up</button>
        </div>

      </form>
    </div>
  );
};

export default login;
