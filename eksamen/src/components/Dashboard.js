import GameShop from "./GameShop"
import MyGames from "./MyGames"
import MyFavorites from "./MyFavorites"
export default function Dashboard({gameArray}){
    console.log(gameArray)
    return(<div id="dashboard">

        <article id="gameshop">
            <GameShop gameArray={gameArray}></GameShop>
        </article>

        <article id="mygames">
            <MyGames></MyGames>
        </article>

        <article id="myfavorites">
            <MyFavorites></MyFavorites>
        </article>

    </div>)
}