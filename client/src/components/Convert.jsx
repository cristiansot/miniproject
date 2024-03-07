import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object({
  currencyFrom: Yup.string().required('Required'),
  currencyTo: Yup.string().required('Required'),
  amount: Yup.number().required('Required'),
});

const convertCurrency = ({ sendFunction }) => {
  
  const send = (values, { resetForm }) => {
    sendFunction();

    const {currencyFrom, currencyTo, amount} = values;
      
      if(currencyFrom === 'CDN' && currencyTo === 'USD'){
        let newAmount = (amount / 1) * 0.75;
        newAmount = Math.ceil(newAmount);
        alert('Currency Converted Successfully');
        console.log('Amount converted', newAmount);
        // resetForm();
        return newAmount;
      }
    };

  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      currencyFrom: '',
      currencyTo: '',
      amount: ''
    },
    validationSchema: schema,
    onSubmit: send,
  });
  return (
    <div>
      <h1>Convert</h1>
      <form onSubmit={handleSubmit}>
        <div className='gridInputs'>
          <input className='inputConvert' type="text" placeholder='Currency From' name='currencyFrom' value={values.currencyFrom} onChange={handleChange} />
          <input className='inputConvert' type="text" placeholder='Currency To' name='currencyTo' value={values.currencyTo} onChange={handleChange} />
          <input className='inputConvert' type="number" placeholder='Amount' name='amount' value={values.amount} onChange={handleChange} />
          <div>{errors.currencyFrom && <div>{errors.currencyFrom}</div>}</div>
          <div>{errors.currencyTo && <div>{errors.currencyTo}</div>}</div>
          <div>{errors.amount && <div>{errors.amount}</div>}</div>
        </div>

        <div className='contentBtns'>
          <button className='btn' type='submit'>Convert</button>
        </div>
        
      </form>
    </div>
  );
};

export default convertCurrency;