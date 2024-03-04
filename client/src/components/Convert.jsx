import React from 'react';
import { useFormik } from 'formik';

/* The code is defining a functional component called `Convert`. Inside the component, it is using the
`useFormik` hook from the `formik` library to handle form state and form submission. */
const Convert = () => {

  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      currencyFrom: '',
      currencyTo: '',
      amount: ''
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

/* The `return` statement in the `Convert` component is returning JSX code that represents the
structure and content of the component's rendered output. */
  return (
    <div>
      <h1>Convert</h1>
      <form onSubmit={handleSubmit}>
        <div className='contentInputs'>
          <input className='inputConvert' type="cucurrencyFrom" placeholder='Currency From' name='currencyFrom' onChange={handleChange} />
          <input className='inputConvert'  placeholder='Currency To' name='currencyTo' onChange={handleChange} />
          <input className='inputConvert'  placeholder='Amount' name='amount' onChange={handleChange} />
        </div>
       
        <div className='contentBtns'>
          <button className='btn' type='convert'>Convert</button>
          <button className='btn' type='convertedAmount'>Converted Amount</button>
        </div>

      </form>
    </div>
  );
};

export default Convert;
