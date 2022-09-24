import React, { useRef, useState } from "react";
import "./ChipsForm.css";
import { v4 as uuid } from "uuid";
import CheetoImage from "./CheetoImage";

const ChipsForm = ({ snackName }) => {
  let imgCounter = [];
  let counter = useRef(0);
  const [eaten, setEaten] = useState(counter.current);
  for (let i = 1; i <= eaten; i++) {
    imgCounter.push(<CheetoImage key={uuid()} />);
    console.log(imgCounter[0]);
  }
  const handleClick = (e) => {
    counter.current = counter.current + 1;
    setEaten(counter.current);
    e.preventDefault();
  };
  return (
    <div>
      <form>
        <button onClick={handleClick}>Eat {snackName}</button>
      </form>
      <p>
        You've Eaten {eaten} bags of{snackName}
      </p>
      {imgCounter}
    </div>
  );
};

export default ChipsForm;
