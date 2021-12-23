import { useEffect, useState } from "react";
import { api } from "./api";
import "./App.css";
import { UserCard } from "./components/user";

function App() {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState([]);
  const [disabelBtn, setDisableBtn] = useState(false);
  useEffect(() => {
    setLoading(true);
    api()
      .get("/users")
      .then((res) => {
        setUserData(res.data.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="App">
      <h1>Users</h1>
      {loading && "...loading"}
      {userData.length
        ? userData.map(({ id, email, first_name, avatar }) => {
            return (
              <UserCard
                key={id}
                email={email}
                name={first_name}
                img={avatar}
                id={id}
                disabelBtn={disabelBtn}
                handleDisable={setDisableBtn}
              />
            );
          })
        : "no data"}
    </div>
  );
}

export default App;
