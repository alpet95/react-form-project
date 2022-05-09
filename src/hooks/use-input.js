import { useReducer } from "react";

// ========== default state ==========
const initialInputState = {
  value: "",
  touched: false,
};

// ========== reducer function ==========
const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return {
      value: action.value,
      touched: state.touched,
    };
  }

  if (action.type === "BLUR") {
    return {
      value: state.value,
      touched: action.touched,
    };
  }

  if (action.type === "RESET") {
    return {
      value: action.value,
      touched: action.touched,
    };
  }

  return initialInputState;
};

// ========== custom input hook ==========
const UseInput = (validateValue) => {
  // __________ reducer __________
  const [inputState, dispatchInput] = useReducer(
    inputStateReducer,
    initialInputState
  );

  // __________ validation __________
  const validValue = validateValue(inputState.value);
  const errorValue = !validValue && inputState.touched;

  // __________ handlers __________
  const inputChangeHandler = (event) => {
    dispatchInput({
      type: "INPUT",
      value: event.target.value,
    });
  };

  const inputBlurHandler = () => {
    dispatchInput({
      type: "BLUR",
      touched: true,
    });
  };

  const inputResetHandler = () => {
    dispatchInput({
      type: "RESET",
      value: "",
      touched: false,
    });
  };

  return {
    value: inputState.value,
    valid: validValue,
    error: errorValue,
    inputChangeHandler,
    inputBlurHandler,
    inputResetHandler,
  };
};

export default UseInput;