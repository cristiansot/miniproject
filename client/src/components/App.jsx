import React from "react";
import Login from "./Login.jsx";
import Convert from "./Convert.jsx"
import AddCurrency from "./AddCurrency.jsx";
import UpdateCurrency from "./UpdateCurrency.jsx"
import Delete from "./Delete.jsx";

/**
 * The App component renders a div with several child components for login, currency conversion, adding
 * currency, updating currency, and deleting currency.
 * @returns The App component is returning a JSX element. The JSX element is a div with the className
 * "app" and it contains several child components: Login, Convert, AddCurrency, UpdateCurrency, and
 * Delete.
 */
const App = () => {
  return (
    <div className="app">
      <Login />
      <Convert />
      <AddCurrency />
      <UpdateCurrency />
      <Delete />
    </div>
  );
};

export default App;
