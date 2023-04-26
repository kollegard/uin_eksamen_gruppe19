import GameShop from "./GameShop"
import MyGames from "./MyGames"
import MyFavorites from "./MyFavorites"
export default function Dashboard(){
    return(<div id="dashboard">

        <article id="gameshop">
            <GameShop></GameShop>
        </article>

        <article id="mygames">
            <MyGames></MyGames>
        </article>

        <article id="myfavorites">
            <MyFavorites></MyFavorites>
        </article>

    </div>)
}