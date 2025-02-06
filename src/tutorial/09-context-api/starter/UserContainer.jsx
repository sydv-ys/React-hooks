import { useAppContest } from "./Navbar";

function UserContainer() {
  const { user, logout } = useAppContest();

  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello There {user?.name}</p>
          <button className="btn" onClick={logout}>
            logout
          </button>{" "}
        </>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
}

export default UserContainer;
