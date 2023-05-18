import {store, mygames} from "./games"
import React,{useState } from 'react';
import { NavLink } from "react-router-dom";
export default function MyFavorites({ sliceVal }) {
    const [slice, setSlice] = useState(sliceVal);

    return (
      <aside id="favorites">
        <h3>My favorites</h3>

        <ul id="favoritelist">
          {mygames
            .filter((games) => games.fav === true)
            .slice(0, slice)
            .map((games) => (
              <li key={games.id}>
                <h2>{games.title}</h2>
                <img src={games.img} alt={bilde for ${games.title}'}/>
                <p>Released: {games.released}</p>
                <p>Genre: {games.genres}</p>
                <a href={games.link}>
                  <button>Read more</button>
                </a>
              </li>
            ))}
        </ul>
        <NavLink key={"fav"} to={"MyFavorites"}>
          <button id="favnavlinkbtn">Go to favorites</button>
        </NavLink>
      </aside>
    );
  }