import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  // const newValue = () => {
  //   setValue(value + 1)
  //   console.log('clicked');

  // };
  const newValue = () => {
    setValue((num) => {
      return num + 1;
    });
  };

  return (
    <>
      <p>{value}</p>
      <button onClick={newValue}>increase</button>
    </>
  );
};

export default UseStateGotcha;
