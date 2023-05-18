import {store, mygames} from "./games"
import React,{useState} from 'react';


export default function GameShop({sliceVal}){
    const [slice,setSlice] = useState(sliceVal)
    

    return(

        <section id="gameShop">
        <h2>Game Shop</h2>
        <div id="gs">
        {
            
            store.slice(0,sliceVal).map((games) => (
            
                <ul>
                
                <li> <img src={games.img} alt={`bilde for ${games.title}`}/> </li>
                <li> <h2>{games.title}</h2></li>
                <a href={games.link}><button>Buy game</button></a>
                
                </ul>
                
            ))
            
        }</div>
        
        
        </section>
          
    
    )
}