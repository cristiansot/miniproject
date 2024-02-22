import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'; 

/* The `const schema` is creating a validation schema using the Yup library. It defines the validation
rules for the `currencyCode` field. In this case, it specifies that the `currencyCode` field is
required and must be a string. If the field is empty or not a string, it will display the error
message 'Required'. */
const schema = Yup.object({
  currencyCode: Yup.string().required('Required'),
});

/**
 * The DeleteCurrency function is a React component that handles the deletion of a currency by sending
 * a DELETE request to an API endpoint and displaying the response.
 */
const DeleteCurrency = () => {

  const send = async (values, { resetForm }) => {
    try {
      values.currencyCode = values.currencyCode.toUpperCase();
      const response = await axios.delete('http://localhost:3001/api/currency/', { data: values });
      console.log('Response:', response.data);
      alert('Currency Deleted');
      resetForm(); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      currencyCode: ''
    },
    validationSchema: schema,
    onSubmit: send,
  });

/* The `return` statement is returning the JSX code that represents the UI of the `DeleteCurrency`
component. */
  return (
    <div>
      <h1>Delete</h1>
      <form onSubmit={handleSubmit}>
        <div className='contentInputs'>
          <input className='inputDelete' type="text" placeholder='Currency Code' name='currencyCode' value={values.currencyCode} onChange={handleChange} />
        </div>
        <div className='reqDelete'>{errors.currencyCode && <div>{errors.currencyCode}</div>}</div>
       
        <div className='contentBtns'>
          <button className='btn' type='submit'>Delete</button>
        </div>
      </form>
    </div>
  );
};

export default DeleteCurrency;
