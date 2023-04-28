import GameShop from "./GameShop";
import MyGames from "./MyGames";
import MyFavorites from "./MyFavorites";
import Gamecard from "./Gamecard";

export default function Dashboard({games}){
    return(
        <div id="body>">
        <header>
            <h1>Gameshop</h1>
        </header>
        <nav>
            <ul>
                <li>Home</li>
                <li>Favorites</li>
                <li>My Games</li>
                <li>Shop</li>
            </ul>
        </nav>
        <main>
            <section>
                <h2>Gameshop</h2>
                <button>Visit Shop</button>
                <GameShop games={games}/>
            </section>

            <section>
                <h2>My Games</h2>
                <button>My Games</button>
                <MyGames games={games}/>
            </section>

            <aside>
                <h3>Favorites</h3>
                <MyFavorites games={games}/>
                <button>My Favorites</button>
            </aside>

        </main>

        <footer>
            <p>All credit to the creator of the API <a href="https://rawg.io/">Rawg.io</a></p>
        </footer>

        </div>
    )
}