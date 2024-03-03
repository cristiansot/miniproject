import React, { useState, useEffect } from "react";
import Login from "./Login.jsx";
import Convert from "./Convert.jsx";
import AddCurrency from "./AddCurrency.jsx";
import UpdateCurrency from "./UpdateCurrency.jsx";
import DeleteCurrency from "./Delete.jsx";
import axios from "axios";

const baseURL = "http://localhost:3001/currency";

const App = () => {
  const [post, setPost] = useState([]);

/* Tasneem and Aleem helped me solve and understand how to show
** get data in the frontend and thus be able to capture the ID 
** and send it to the endpoints on the server.
*/
  const getData = (data) => {
    setFormData(data);
  };

  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        setPost(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  // I tried to do this part work with .map, but it could not
  const handleDelete = (currencyCode) => {
    const foundCurrency = post.find((currency) => currency.currencyCode === currencyCode);
    if (foundCurrency) {
      const dataToSend = { id: foundCurrency.id };
      axios.delete(`${baseURL}/${dataToSend.id}`)
        .then((response) => {
          console.log("ID deleted successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error deleting ID:", error);
        });
    } else {
      console.error("Currency not found");
    }
  };

  return (
    <div className="app">
      <Login />
      <Convert />
      <AddCurrency getData={getData} />
      <UpdateCurrency getData={getData} />
      <DeleteCurrency onDelete={handleDelete} />
    </div>
  );
};

export default App;
