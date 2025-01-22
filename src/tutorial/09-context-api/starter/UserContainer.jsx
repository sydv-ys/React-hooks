import React, { useContext } from "react";
import { NavbarContext } from "./Navbar";

function UserContainer() {
  const { user, logout } = useContext(NavbarContext);

  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello There {user?.name}</p>
          <button className="btn" onClick={logout}>logout</button>{" "}
        </>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
}

export default UserContainer;
