import React from "react";
// ========== styles ==========
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes["form-control"]}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} autoComplete="off" />
    </div>
  );
};

export default Input;
