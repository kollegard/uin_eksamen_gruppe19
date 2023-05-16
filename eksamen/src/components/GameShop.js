import {store, mygames} from "./games"
import MyFavorites from "./MyFavorites"
export default function GameShop(){
    return(<>

        <section id="gameShop">
        <h2>Game Shop</h2>

        <ul>
        {
            store.map((games) => (
                <>
                <li> <h2>{games.title}</h2></li>
                <li> <img src={games.img} alt={`bilde for ${games.title}`}/> </li>
                <a href={games.link}><button>Kjøp spill</button></a>
                
                </>
            ))
        }
        </ul>
        
        </section>
          
    
    </>)
}