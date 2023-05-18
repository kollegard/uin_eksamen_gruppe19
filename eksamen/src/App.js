import './css/main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {mygames, store} from "./components/games"
import Dashboard from './components/Dashboard';
import GameShop from './components/GameShop';
import MyGames from './components/MyGames';
import MyFavorites from './components/MyFavorites';
import { NavLink } from "react-router-dom";


function App() {

  return (
  <>
  <nav>
    <h3>Logo</h3>
    <ul>
      <NavLink key={"home"} to={"/"}>
        home
      </NavLink>
      <NavLink key={"gameshop"} to={"GameShop"}>
        Go to gameshop
      </NavLink>
      <NavLink key={"mygames"} to={"MyGames"}>
          Go to my games
        </NavLink>
        <NavLink key={"fav"} to={"MyFavorites"}>
         Go to favorites
        </NavLink>
    </ul>
  </nav>
    <main>
      <Routes>
       <Route path='/' element={<Dashboard/>}/>
       <Route path='GameShop' element={<GameShop sliceVal={store.length}/>}/>
       <Route path="MyFavorites" element={<MyFavorites sliceVal={mygames.filter((games)=>games.fav===true).length}/>}/>
       <Route path='MyGames' element={<MyGames games={mygames} sliceVal={mygames.filter.length}/>}/>
      </Routes>
    </main>
  </>
  );
}

export default App;
