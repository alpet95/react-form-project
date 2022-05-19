import React from "react";
// ========== hooks ==========
import UseInput from "../hooks/use-input";
// ========== styles ==========
import classes from "./Form.module.css";

const Form = (props) => {
  // ========== valid input value ==========
  const inputIsNotEmpty = (value) => value.trim() !== "";
  const inputFitsEmail = (value) =>
    // eslint-disable-next-line
    value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

  // ========== custom input hook ==========
  const {
    value: firstNameValue,
    valid: firstNameValid,
    error: firstNameError,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    inputResetHandler: firstNameResetHandler,
  } = UseInput(inputIsNotEmpty);

  const {
    value: lastNameValue,
    valid: lastNameValid,
    error: lastNameError,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    inputResetHandler: lastNameResetHandler,
  } = UseInput(inputIsNotEmpty);

  const {
    value: emailValue,
    valid: emailValid,
    error: emailError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    inputResetHandler: emailResetHandler,
  } = UseInput(inputFitsEmail);

  // ========== form submit handler ==========
  const formSubmitHandler = (event) => {
    event.preventDefault();

    firstNameBlurHandler();
    lastNameBlurHandler();
    emailBlurHandler();

    if (!firstNameValid || !lastNameValid || !emailValid) {
      return;
    }

    firstNameResetHandler();
    lastNameResetHandler();
    emailResetHandler();

    props.onSendData(firstNameValue, lastNameValue);
    props.onFormSubmit(true);
  };

  // ========== validation ==========
  let formValid = false;
  if (!firstNameError && !lastNameError && !emailError) {
    formValid = true;
  }

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <h1>Subscribe</h1>
      {/* ========== first name ========== */}
      <div
        className={`${classes["form-control"]} ${
          firstNameError && classes.invalid
        }`}
      >
        <label htmlFor="firstname">First Name</label>
        <input
          id="firstname"
          type="text"
          name="firstname"
          value={firstNameValue}
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler}
          autoComplete="off"
        />
        {firstNameError && <span>Please enter your first name!</span>}
      </div>
      {/* ========== last name ========== */}
      <div
        className={`${classes["form-control"]} ${
          lastNameError && classes.invalid
        }`}
      >
        <label htmlFor="lastname">Last Name</label>
        <input
          id="lastname"
          type="text"
          name="lastname"
          value={lastNameValue}
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
          autoComplete="off"
        />
        {lastNameError && <span>Please enter your last name!</span>}
      </div>
      {/* ========== email ========== */}
      <div
        className={`${classes["form-control"]} ${
          emailError && classes.invalid
        }`}
      >
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          autoComplete="off"
        />
        {emailError && <span>Please enter your email!</span>}
      </div>
      <button disabled={!formValid}>SUBMIT</button>
    </form>
  );
};

export default Form;