import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/counterSlice";
import { showSpinner } from "./redux/spinnerSlice";

function App() {
  const count = useSelector((state) => state.counterSlice.value);
  console.log(count);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(showSpinner("Loading data..."))}
        >
          show spinner
        </button>
      </div>
    </div>
  );
}
export default App;
