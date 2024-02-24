import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'; 

/* The `const schema` is defining a validation schema using the Yup library. It is creating an object
schema with two fields: `currencyCode` and `amount`. */
const schema = Yup.object({
  currencyCode: Yup.string().required('Required'),
  amount: Yup.number().required('Required'),
});

/**
 * The `updateCurrency` function is a JavaScript React function that handles the submission of a form
 * to update currency values by making a PUT request to a specified API endpoint.
 */
const updateCurrency = () => {

  const send = async (values, { resetForm }) => {
    values.currencyCode = values.currencyCode.toUpperCase();

    try {
      const response = await axios.put('http://localhost:3008/currency/', values);
      console.log('Response:', response.data);
      alert('Currency Updated')
      resetForm(); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  /* The code `const { handleSubmit, handleChange, errors, values } = useFormik({ ... })` is using the
  `useFormik` hook from the Formik library to handle form state, validation, and submission. */
  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      currencyCode: '',
      amount: ''
    },
    validationSchema: schema,
    onSubmit: send,
  });

/* The `return` statement is returning JSX (JavaScript XML) code, which is used to define the structure
and content of the user interface in React. */
  return (
    <div>
      <h1>Update Currency</h1>
      <form onSubmit={handleSubmit}>
        <div className='updateGridInputs'>
          <input className='inputUpdate' type="text" placeholder='Currency Code' name='currencyCode' onChange={handleChange} />
          <input className='inputUpdate' type="number" placeholder='Amount' name='amount' onChange={handleChange} />
          <div>{errors.currencyCode && <span>{errors.currencyCode}</span>}</div>
          <div>{errors.amount && <span>{errors.amount}</span>}</div>
        </div>
       
        <div className='contentBtns'>
          <button className='btn' type='update'>Update</button>
        </div>

      </form>
    </div>
  );
};

export default updateCurrency;