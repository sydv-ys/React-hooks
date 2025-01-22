import React, { useState, createContext } from "react";
import NavLinks from "./NavLinks";
import UserContainer from "./UserContainer";

export const NavbarContext = createContext();

function Navbar() {
  const [user, setUser] = useState({
    name: "something",
  });

  const logout = () => {
    setUser(null);
  };

  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
}

export default Navbar;
