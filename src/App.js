import React, { useState } from "react";
// ========== components ==========
import Form from "./components/layout/Form";
import Welcome from "./components/layout/Welcome";
import classes from "./App.module.css";

const App = () => {
  // ========== state ==========
  const [logged, setLogged] = useState(false);
  const [userData, setUserData] = useState({});

  // ========== handlers ==========
  const getNamesHandler = (fname, lname) => {
    setUserData(() => {
      return {
        fname,
        lname,
      };
    });
  };

  return (
    <div className={classes.app}>
      {logged && <Welcome data={userData} />}
      {!logged && (
        <Form onSendData={getNamesHandler} onFormSubmit={setLogged} />
      )}
    </div>
  );
};

export default App;
