import { useState } from "react";
import Button from "./Button";

const Increment = () => {
  let [number, setNumber] = useState(100);
  const incrementHandler = (val, op) => {
    if (op === "increment") setNumber(number + val);
    else if (op === "decrement") setNumber(number - val);
  };
  return (
    <div>
      <h4
        style={{
          borderStyle: "groove",
          borderColor: " gold",
          padding: "7px",
          marginBottom: "5px",
          display: "inline-block",
          fontWeight: "bold",
        }}
      >
        Increment Activity
      </h4>
      <h5>{number}</h5>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "10px",
          marginBottom: "550px",
        }}
      >
        <Button
          class="green"
          val={50}
          op="increment"
          incrementHandler={incrementHandler}
        />
        <Button
          class="green"
          val={100}
          op="increment"
          incrementHandler={incrementHandler}
        />
        <Button
          class="green"
          val={50}
          op="decrement"
          incrementHandler={incrementHandler}
        />
        <Button
          class="green"
          val={100}
          op="decrement"
          incrementHandler={incrementHandler}
        />
      </div>
    </div>
  );
};

export default Increment;
