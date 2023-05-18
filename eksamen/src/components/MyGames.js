import React from "react";
import { mygames } from "./games";

const MyGames = ({games}) =>{
    return (
        <section id="myGames">
            <h2>My Games - {mygames.length} games</h2>
            <ul>
            {games.map((games) => (
                <ul key={games.id}>
                    
                    <li><img src={games.img} alt={games.title}/></li>
                    <h2>{games.title}</h2>
                    <p>Genre: {games.genres}</p>
                   
                </ul>
            ))}
        </ul></section>
    )
}

export default MyGames; 