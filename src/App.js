import React from "react";
// ========== components ==========
import Form from "./components/layout/Form";
import classes from "./App.module.css";

const App = () => {
  return (
    <div className={classes.app}>
      <Form />
    </div>
  );
};

export default App;