import { useState } from "react";
import { planets } from "./data.js";

export default function List() {
  const [index, setIndex] = useState(0);
  const [onyeshaZaidi, setOnyeshaZaidi] = useState(false);

  function handleClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setOnyeshaZaidi(!onyeshaZaidi);
  }

  let sayari = planets[index];
  return (
    <>
      <h1>Elimu ya Sayari na Sayansi ya Vimondo</h1>
      <button onClick={handleClick}>Nyingine</button>
      <h2>
        <i>{sayari.jina} </i>
        alama {sayari.alama}
      </h2>
      <h3>
        ({index + 1} of {planets.length})
      </h3>
      <button onClick={handleMoreClick}>
        {onyeshaZaidi ? "Ficha" : "Onyesha"} zaidi
      </button>
      <img src={sayari.url} alt={sayari.alt} />
      {onyeshaZaidi && <p>{sayari.maelezo}</p>}
    </>
  );
}
