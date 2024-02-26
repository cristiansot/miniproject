import React, { useState } from "react";
import Login from "./Login.jsx";
import Convert from "./Convert.jsx"
import AddCurrency from "./AddCurrency.jsx";
import UpdateCurrency from "./UpdateCurrency.jsx"
import Delete from "./Delete.jsx";

const App = () => {
  const [formData, setFormData] = useState();

  const getData = (data) => {
    setFormData(data); // Guarda los datos en el estado formData
  };

  return (
    <div className="app">
      <Login />
      <Convert />
      <AddCurrency getData={getData} />
      <UpdateCurrency />
      <Delete />

      <div>
        {JSON.stringify(formData)}
      </div>
    
    </div>
  );
};

export default App;
