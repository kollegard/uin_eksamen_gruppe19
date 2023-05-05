import {store, mygames} from "./games"
import React,{useState } from 'react';
export default function MyFavorites(){
    const [slice,setSlice] = useState(2)

    const showAllFavorites = () => {setSlice(mygames.filter((games)=>games.fav===true).length)}

    return(
    <section id="favorites">
        <h3>My favorites</h3>

        <ul id="favoritelist">
        {
            mygames.filter((games) => games.fav === true).slice(0,slice).map((games) => (
                 
                <>
                 <li> <h2>{games.title}</h2></li>
                 <li> <img src={games.img} alt={`bilde for ${games.title}`}/> </li>
                </>
            ))
        }
        </ul>
        <button id="favoritebtn" onClick={showAllFavorites}>Go to favorites</button>
    </section>    )
}