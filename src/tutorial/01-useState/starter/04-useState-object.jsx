import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "ghost",
    age: 23,
  });

  const displayNext = () => {
    setPerson({
      name: "aysu",
      age: 22,
    });
  };
  return (
    <>
      <p>{person.name}</p>
      <p>{person.age}</p>
      <button onClick={displayNext}>change</button>
    </>
  );
};

export default UseStateObject;
