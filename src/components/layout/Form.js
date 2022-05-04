import React from "react";
// ========== components ==========
import Input from "../interface/Input";
// ========== styles ==========
import classes from "./Form.module.css";

const Form = () => {
  return (
    <form className={classes.form}>
      <h1>Sign In</h1>
      <Input
        label="First Name"
        input={{
          id: "firstname",
          type: "text",
        }}
      />
      <Input
        label="Last Name"
        input={{
          id: "lastname",
          type: "text",
        }}
      />
      <button>SUBMIT</button>
    </form>
  );
};

export default Form;
