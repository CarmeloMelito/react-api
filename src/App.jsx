import { useState, useEffect } from "react";
import axios from "axios";
//API ATTRICI
const actressesApi = "https://www.freetestapi.com/api/v1/actresses";
const actorsApi = "https://www.freetestapi.com/api/v1/actors";
function App() {
  const [actressesList, setActressesList] = useState([]);
  //ATTORI
  const [actorsList, setActorsList] = useState([]);

  function fetchActresses() {
    //AXIOS
    axios
      .get(actressesApi)
      .then((res) => (setActressesList(res.data), console.log(res.data)));
    //ATTORI
    axios.get(actorsApi).then((res) => setActorsList(res.data));
  }

  useEffect(() => {
    axios.get(actressesApi).then((res) => setActressesList(res.data));
    axios.get(actorsApi).then((res) => setActorsList(res.data));
  }, []);

  //CARD ATTORI
  const card = (person) => (
    <div className="actress-card" key={person.id}>
      <img src={person.image} alt={person.name} className="actress-image" />
      <h3 className="actress-name">{person.name}</h3>
      <p className="actress-info">Anno di nascita: {person.birth_year}</p>
      <p className="actress-nat">Nazionalità: {person.nationality}</p>
      <p className="actress-bio">Bio: {person.biography}</p>
      <p className="actress-awards"> {person.awards}</p>
      <hr />
    </div>
  );

  return (
    <>
      {/* ATTRICI */}
      <h1>ATTRICI</h1>
      <span>{actressesList.map(card)}</span>

      {/* ATTORI */}
      <h1>ATTORI</h1>

      <span> {actorsList.map(card)}</span>
    </>
  );
}

export default App;
