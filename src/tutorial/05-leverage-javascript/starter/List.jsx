import React from "react";
import { people } from "../../../data";
import Person from "./Person";

function List() {
  return (
    <>
      <h1>list</h1>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </>
  );
}

export default List;
