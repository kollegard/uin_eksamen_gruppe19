import {store, mygames} from "./games"
import MyFavorites from "./MyFavorites"
export default function GameShop(){
    return(<>

        <section>
        <h2>Game Shop</h2>

        <ul>
        {
            store.map((games) => (
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