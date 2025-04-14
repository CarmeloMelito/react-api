import { useState, useEffect } from "react";

import axios from "axios";
//API ATTRICI
const actressesApi = "https://www.freetestapi.com/api/v1/actresses";

function App() {
  const [actressesList, setActressesList] = useState([]);

  function fetchActresses() {
    //AXIOS
    axios
      .get(actressesApi)
      .then((res) => (setActressesList(res.data), console.log(res.data)));
  }

  useEffect(fetchActresses, []);

  return (
    <>
      <h1>ATTRICI</h1>
      <span>
        {actressesList.map((actress) => (
          //CARD
          <div className="actress-card" key={actress.id}>
            <img
              src={actress.image}
              alt={actress.name}
              className="actress-image"
            />
            <h3 className="actress-name">{actress.name}</h3>
            <p className="actress-info">{actress.birth_year}</p>
            <p className="actress-nat">{actress.nationality}</p>
            <p className="actress-bio">{actress.biography}</p>
            <p className="actress-awards">{actress.awards}</p>
          </div>
        ))}
      </span>
    </>
  );
}

export default App;
