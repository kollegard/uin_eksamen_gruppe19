import React from "react";

const MyGames = ({games}) =>{
    return (
        <article>
            <h2>My Games</h2>
            {games.map((games) => (
                <ul key={games.id}>
                    <img src={games.img} alt={games.title}/>
                    <h2>{games.title}</h2>
                    <p>{games.relesed}</p>
                    <p>{games.genres}</p>
                    <a href={games.link}>
                        <button>Kjøp Spill</button>
                    </a>
                </ul>
            ))}
        </article>
    )
}

export default MyGames; 