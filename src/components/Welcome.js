import React from "react";
// ========== styles ==========
import classes from "./Welcome.module.css";

const Welcome = (props) => {
  const userName = `${props.data.fname} ${props.data.lname}`;

  return (
    <div className={classes.welcome}>
      <h1>Welcome!</h1>
      <p>{userName}</p>
    </div>
  );
};

export default Welcome;