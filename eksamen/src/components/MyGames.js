import React from "react";

const MyGames = ({games}) =>{
    return (
        <section id="myGames">
            <h2>My Games</h2>
            {games.map((games) => (
                <ul key={games.id}>
                    <h2>{games.title}</h2>
                    <img src={games.img} alt={games.title}/>
                    <p>{games.released}</p>
                    <p>{games.genres}</p>
                    <a href={games.link}>
                        <button>Les mer</button>
                    </a>
                </ul>
            ))}
        </section>
    )
}

export default MyGames; 