import { useState, useEffect } from "react";
import axios from "axios";
const actressesApi = "https://www.freetestapi.com/api/v1/actresses";

function App() {
  const [actressesList, setActressesList] = useState([]);

  function fetchActresses() {
    axios
      .get(actressesApi)
      .then((res) => (setActressesList(res.data), console.log(res.data)));
  }

  useEffect(fetchActresses, []);

  return (
    <>
      <span>
        <ul>
          {actressesList.map((actress) => (
            <li key={actress.id}> {actress.name}</li>
          ))}
        </ul>
      </span>
    </>
  );
}

export default App;
