import {mygames} from "./games"
import MyFavorites from "./MyFavorites"
import MyGames from "./MyGames";
import GameShop from "./GameShop";
import { NavLink } from "react-router-dom";

export default function Dashboard(){
    const frontPageMygames = mygames.slice (0,4)
    return(
        <div id="dashboard">
            <NavLink key={"gameshop"} to={"GameShop"}><button id="gameshoplinkbtn">Go to gameshop</button></NavLink>
            <GameShop sliceVal={3}/>
            
            
            <MyFavorites sliceVal={2}/>
            <NavLink key={"fav"} to={"MyFavorites"}><button id="favnavlinkbtn">Go to favorites</button></NavLink>

            <MyGames games={frontPageMygames}/>
            <NavLink key={"mygames"} to={"MyGames"}><button id="mygameslinkbtn">Go to my games</button></NavLink>
            </div>
    )
}