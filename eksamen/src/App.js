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
      <li>Home</li>
      <NavLink key={"gameshop"} to={"GameShop"}>
        <button id="gameshoplinkbtn">Go to gameshop</button>
      </NavLink>
      <NavLink key={"mygames"} to={"MyGames"}>
          <button id="mygameslinkbtn">Go to my games</button>
        </NavLink>
        <NavLink key={"fav"} to={"MyFavorites"}>
          <button id="favnavlinkbtn">Go to favorites</button>
        </NavLink>
    </ul>
  </nav>
    <main>
      <Routes>
       <Route path='/' element={<Dashboard/>}/>
       <Route path='GameShop' element={<GameShop sliceVal={store.filter.length}/>}/>
       <Route path="MyFavorites" element={<MyFavorites sliceVal={mygames.filter((games)=>games.fav===true).length}/>}/>
       <Route path='MyGames' element={<MyGames games={mygames} sliceVal={mygames.filter.length}/>}/>
      </Routes>
    </main>
  </>
  );
}

export default App;
