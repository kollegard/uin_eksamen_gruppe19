import {mygames} from "./games"
import MyFavorites from "./MyFavorites"
import MyGames from "./MyGames";
import GameShop from "./GameShop";
import { NavLink } from "react-router-dom";

export default function Dashboard() {
    const frontPageMygames = mygames.slice(0, 4);

    return (
      <div id="dashboard">

            <GameShop sliceVal={3}/>



        <div id="myGamesFavorites">
          <MyGames games={frontPageMygames} />
          <MyFavorites sliceVal={2} />
        </div>




      </div>
    );
  }