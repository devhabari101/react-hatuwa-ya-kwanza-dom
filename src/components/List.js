import { planets } from "./data.js";
import { getImageUrl } from "./utils.js";

export default function List() {
  const orodhaVitu = planets.map((sayari) => (
    <li key={sayari.id}>
      <img src={getImageUrl(sayari)} alt={sayari.jina} />

      <p>
        Jina la sayari <b>{"" + sayari.jina}</b>
      </p>
      <p>alama {" " + sayari.alama + " "}</p>
      <p>
        imeitwa jina la <b>{sayari.chimbuko}</b>
      </p>
      <p>{sayari.mgunduzi}</p>
    </li>
  ));
  return (
    <article>
      <h1>Elimu ya Sayari na Sayansi ya Vimondo</h1>
      <ul>{orodhaVitu}</ul>
    </article>
  );
}
