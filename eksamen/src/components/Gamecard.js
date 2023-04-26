import GameShop from "./GameShop";
import MyGames from "./MyGames";

export default function Gamecard({games}){
    return (
        <div>
            {games?.map((g, index) => (<GameShop
                                        name= {g.name}
                                        key = {index}
                                        photo = {g.background_image}/>))}
            {/* {games?.slice(0, 3).map */}

        </div>
    )
}