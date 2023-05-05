import {store, mygames} from "./games"
export default function MyFavorites(){

    const showAllFavourites = () => {return(<section>
        <h3>My favorites</h3>

        <ul>
        {
            mygames.filter((games) => games.fav === true).slice(0,2).map((games) => (
                 
                <>
                 <li> <h2>{games.title}</h2></li>
                 <li> <img src={games.img} alt={`bilde for ${games.title}`}/> </li>
                </>
            ))
        }
        </ul>
        </section>)}
    return(
    <section>
        <h3>My favorites</h3>

        <ul>
        {
            mygames.filter((games) => games.fav === true).slice(0,2).map((games) => (
                 
                <>
                 <li> <h2>{games.title}</h2></li>
                 <li> <img src={games.img} alt={`bilde for ${games.title}`}/> </li>
                </>
            ))
        }
        </ul>
        <button onClick={showAllFavourites}>Go to favorites</button>
        
        </section>    )
}