import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        const users = await resp.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>github users</h2>

      <ul className="users">
        {users.map(({ login, id, avatar_url, html_url }) => {
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <h5>{login}</h5>
              <a href={html_url}>
                profile
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default FetchData;
