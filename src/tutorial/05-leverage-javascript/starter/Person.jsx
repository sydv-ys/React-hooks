import React from "react";
import { people } from "../../../data";

function Person({ name, nickName = "no nickname", images }) {
  // const img = images[0].small.url;
  return (
    <div>
      {/* <img src={img} alt="" /> */}
      <h4>{name}</h4>
      <p>nickname: {nickName}</p>
    </div>
  );
}

export default Person;
