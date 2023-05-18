import {store, mygames} from "./games"
import React,{useState} from 'react';
import { NavLink } from "react-router-dom";


export default function GameShop({sliceVal}){
    const [slice,setSlice] = useState(sliceVal)


    return(

        <section id="gameShop">
<<<<<<< HEAD
        <h2>Game Shop</h2> <NavLink key={"gameshop"} to={"GameShop"}><button id="gameshoplinkbtn">Go to gameshop</button></NavLink>
=======
        <NavLink key={"gameshop"} to={"GameShop"}><button id="gameshoplinkbtn">Go to gameshop</button></NavLink>
        <h2>Game Shop</h2>
>>>>>>> 914ed93e6d4374661a371bca65ce9838be3bed50
        <div id="gs">
        {

            store.slice(0,sliceVal).map((games) => (
<<<<<<< HEAD

                <ul key={games.id}>

                <li> <img src={games.img} alt={bilde for ${games.title}}/> </li>
=======
            
                <ul key={games.id}>
                
                <li> <img src={games.img} alt={`bilde for ${games.title}`}/> </li>
>>>>>>> 914ed93e6d4374661a371bca65ce9838be3bed50
                <h2>{games.title}</h2>
                <p>Genre: {games.genres}</p>
                <a href={games.link}><button>Buy game</button></a>

                </ul>

            ))

        }</div>


        </section>


    )
}
