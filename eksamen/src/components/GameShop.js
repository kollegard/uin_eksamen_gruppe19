import {store, mygames} from "./games"
import React,{useState} from 'react';
import { NavLink } from "react-router-dom";


export default function GameShop({sliceVal}){
    const [slice,setSlice] = useState(sliceVal)


    return(

        <section id="gameShop">
        <h2>Game Shop</h2> <NavLink key={"gameshop"} to={"GameShop"}><button id="gameshoplinkbtn">Go to gameshop</button></NavLink>
        <div id="gs">
        {

            store.slice(0,sliceVal).map((games) => (

                <ul key={games.id}>

                <li> <img src={games.img} alt={`bilde for ${games.title}`}/> </li>
                <h2>{games.title}</h2>
                <p>Genre: {games.genres}</p>
                <a href={games.link}><button>Buy game</button></a>

                </ul>

            ))

        }</div>


        </section>


    )
}
