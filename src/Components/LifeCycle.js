import { useState } from "react";

const LifeCycle = () => {
  let [name, setName] = useState("Allam");
  let [place, setPlace] = useState("Belagavi");

  const nameHandler = () => {
    setName("Allu");
  };

  const placeHandler = () => {
    setPlace("Benagaluru");
  };

  return (
    <div style={{ marginBottom: "550px", marginTop: "10px" }}>
      <h2 style={{ fontWeight: "bold" }}>Life Cycle</h2>
      <h4>
        I am {name} from {place}
      </h4>
      <button className="btn btn-secondary" onClick={nameHandler}>
        Change Name
      </button>
      <button
        style={{ marginLeft: "8px" }}
        className="btn btn-info"
        onClick={placeHandler}
      >
        Change Place
      </button>
    </div>
  );
};

export default LifeCycle;
