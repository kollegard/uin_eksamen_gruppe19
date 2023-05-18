import {store, mygames} from "./games"
import React,{useState} from 'react';


export default function GameShop({sliceVal}){
    const [slice,setSlice] = useState(sliceVal)
    

    return(<>

        <section id="gameShop">
        <h2>Game Shop</h2>

        <ul>
        {
            store.slice(0,sliceVal).map((games) => (
                <>
                <li> <h2>{games.title}</h2></li>
                <li> <img src={games.img} alt={`bilde for ${games.title}`}/> </li>
                <a href={games.link}><button>Buy game</button></a>
                
                </>
            ))
        }
        </ul>
        
        </section>
          
    
    </>)
}