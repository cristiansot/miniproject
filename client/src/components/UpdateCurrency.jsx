import React, { useState } from "react";

const UpdateCurrency = ({ onUpdate }) => {
    const [currencyCode, setCurrencyCode] = useState("");
    const [conversionRate, setConversionRate] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      onUpdate(currencyCode.toUpperCase(), conversionRate);
      setCurrencyCode("");
      setConversionRate("");
    };

  const handleChange = (event) => {
    setCurrencyCode(event.target.value);
  };

  const handleChangeAmount = (event) => {
    setConversionRate(event.target.value)
  };

  return (
    <div>
      <h1>Update Currency</h1>
      <form onSubmit={handleSubmit}>
        <div className='updateGridInputs'>
          <input className='inputUpdate' type="text" placeholder='Currency Code' value={currencyCode} onChange={handleChange} />
          <input className='inputUpdate' type="number" placeholder='Amount' value={conversionRate} onChange={handleChangeAmount} />
        </div> 
        
        <div className='contentBtns'>
          <button className='btn' type='update'>Add</button>
        </div>

      </form>
    </div>
  );
};

export default UpdateCurrency;
