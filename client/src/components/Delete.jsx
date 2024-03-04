import React, { useState } from "react";

/* Aleem Helped me in to find the way how to solve this part */
const DeleteCurrency = ({ onDelete }) => {
    const [currencyCode, setCurrencyCode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onDelete(currencyCode.toUpperCase());
    setCurrencyCode("");
  };

  const handleChange = (event) => {
    setCurrencyCode(event.target.value);
  };

  return (
    <div>
      <h1>Delete</h1>
      <form onSubmit={handleSubmit}>
        <div className='contentInputs'>
          <input className='inputDelete' type="text" placeholder="Currency Code" value={currencyCode} onChange={handleChange} />
        </div>

        <div className='contentBtns'>
          <button className='btn' type="submit">Delete</button>
        </div>
      </form>
    </div>
  );
};

export default DeleteCurrency;
