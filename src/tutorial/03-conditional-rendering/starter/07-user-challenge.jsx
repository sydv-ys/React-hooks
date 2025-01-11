import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({
      name: "ghost",
    });
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <>
      {user ? (
        <div>
          <h2>hello {user.name}</h2>
          <button onClick={logout}>logout</button>
        </div>
      ) : (
        <div>
          <h2>please login</h2>
          <button onClick={login}>login</button>
        </div>
      )}
    </>
  );
};

export default UserChallenge;
