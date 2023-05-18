import React from "react";
import { mygames } from "./games";
import { NavLink } from "react-router-dom";

const MyGames = ({games}) =>{
    return (
        <section id="myGames">
            <h2>My Games - {mygames.length} games</h2>
            
            {games.map((games) => (
                <ul key={games.id}>
                    <li><img src={games.img} alt={games.title}/></li>
                    <h2>{games.title}</h2>
                    <p>Genre: {games.genres}</p>
                   
                </ul>
            ))}
        <NavLink key={"mygames"} to={"MyGames"}>
          <button id="mygameslinkbtn">Go to my games</button>
        </NavLink>
        </section>
    )
}

export default MyGames; 