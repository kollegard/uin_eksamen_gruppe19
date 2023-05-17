import {store, mygames} from "./games"
import React,{useState } from 'react';
export default function MyFavorites({sliceVal}){
    
    const [slice,setSlice] = useState(sliceVal)

    return(
    <section id="favorites">
        <h3>My favorites</h3>

        <ul id="favoritelist">
        {
            mygames.filter((games) => games.fav === true).slice(0,slice).map((games) => (
                 
                <ul key={games.id}>
                 <li> <h2>{games.title}</h2></li>
                 <li> <img src={games.img} alt={`bilde for ${games.title}`}/> </li>
                </ul>
            ))
        }
        </ul>
    </section>    )
}