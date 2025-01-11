import { useState } from "react";

const ToggleChallenge = () => {
  const [toggle, setToggle] = useState(false);

  const change = () => {
    if (toggle) {
      setToggle(false);
      return;
    }
    setToggle(true);
  };

  return (
    <>
      <h2>toggle challenge</h2>
      <button className="btn" onClick={change}>
        Toggle
      </button>
      {toggle && <Toggle />}
    </>
  );
};

const Toggle = () => {
  return (
    <>
      <p style={{ background: "red", margin:'10px' }}>helloo</p>
    </>
  );
};

export default ToggleChallenge;
