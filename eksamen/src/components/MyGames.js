import React from "react";
import { mygames } from "./games";

const MyGames = ({games}) =>{
    return (
        <section id="myGames">
            <h2>My Games - {mygames.length} games</h2>
            {games.map((games) => (
                <ul key={games.id}>
                    <h2>{games.title}</h2>
                    <li><img src={games.img} alt={games.title}/></li>
                    <p>Released: {games.released}</p>
                    <p>Genre: {games.genres}</p>
                    <a href={games.link}>
                        <button>Read more</button>
                    </a>
                </ul>
            ))}
        </section>
    )
}

export default MyGames; 