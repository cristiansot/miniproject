import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

/* I watched validation videos and connect with API rest on => https://www.youtube.com/watch?v=AD6m5c75OT0&ab_channel=YaelmoDev */
/* https://www.youtube.com/watch?v=J9SUU_6KD1w&ab_channel=CoderOne */

/* The `const schema` is defining a validation schema using the Yup library. It specifies the
validation rules for the form fields in the `AddCurrency` component. */
const schema = Yup.object({
  currencyCode: Yup.string().required('Required'),
  countryId: Yup.number().required('Required'),
  conversionRate: Yup.number().required('Required'),
});


/* The line `const AddCurrency = () => {` is defining a functional component named `AddCurrency`. This
component is written in arrow function syntax. */
const AddCurrency = ({ getData }) => {

/**
 * The function sends a POST request to add a currency to a server and displays a success message if
 * successful.
 */
  
  const send = (values, { resetForm }) => {
  // console.log('Sending request with values:', values);
  // console.log('Values:', values);

    values.currencyCode = values.currencyCode.toUpperCase();
    axios.post('http://localhost:3001/currency', values)
    .then(function (response) {
      // console.log(response);
      alert('Currency Added Successfully');
      getData(values);
      console.log(response);
      resetForm(); 
    })
    .catch(function (error) {
      console.log(error);
    })
  // console.log('Values before sending request:', values);
  };
  
 /* The code `const { handleSubmit, handleChange, errors, values } = useFormik({ ... })` is using the
 `useFormik` hook from the Formik library to handle form state, validation, and submission. */
  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      currencyCode: '',
      countryId: '',
      conversionRate: ''
    },
    validationSchema: schema,
    onSubmit: send,
  });

  /* The `return` statement in the code is rendering the JSX (JavaScript XML) code that represents the
  form for adding a currency. */
  return (
    <div>
      <h1>Add Currency</h1>
      <form onSubmit={handleSubmit}>
        <div className='gridInputs'>
          <input className='inputAdd' type="text" placeholder='Currency Code' name='currencyCode' value={values.currencyCode} onChange={handleChange} />
          <input className='inputAdd' type="number" placeholder='Country ID' name='countryId' value={values.countryId} onChange={handleChange} />
          <input className='inputAdd' type="number" placeholder='Conversion Rate' name='conversionRate' value={values.conversionRate} onChange={handleChange} />
          <div>{errors.currencyCode && <span>{errors.currencyCode}</span>}</div>
          <div>{errors.countryId && <span>{errors.countryId}</span>}</div>
          <div>{errors.conversionRate && <span>{errors.conversionRate}</span>}</div>
        </div> 
        
        <div className='contentBtns'>
          <button className='btn' type='submit'>Add</button>
        </div>

      </form>
    </div>
  );
};

export default AddCurrency;