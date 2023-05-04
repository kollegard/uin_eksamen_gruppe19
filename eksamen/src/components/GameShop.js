import {store, mygames} from "./games"
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
                </>
            ))
        }
        </ul>
        
        </section>    
    
    </>)
}