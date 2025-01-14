import React from "react";
import { people } from "../../../data";
import avatar from "../../../assets/default-avatar.svg";

function Person({ name, nickName = "no nickname", images }) {
  const img = images?.[0]?.small?.url || avatar;
  return (
    <div>
      <img src={img} alt={name} style={{ width: "20px" }} />
      <h4>{name}</h4>
      <p>nickname: {nickName}</p>
    </div>
  );
}

export default Person;
