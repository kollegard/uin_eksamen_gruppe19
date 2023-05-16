import './css/main.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {mygames, store} from "./components/games"
import Dashboard from './components/Dashboard';
import GameShop from './components/GameShop';
import MyGames from './components/MyGames';
import MyFavorites from './components/MyFavorites';


function App() {

  


  return (
  <>
  <nav>
    <h3>Logo</h3>
    <ul>
      <li>Home</li>
      <li>Game Shop</li>
      <li>My games</li>
      <li>My favorites</li>
    </ul>
  </nav>
    <main>
      <Routes>
       <Route path='/' element={<Dashboard/>}/>
       <Route path='GameShop' element={<GameShop sliceVal={store.filter.length}/>}/>
       <Route path="MyFavorites" element={<MyFavorites sliceVal={mygames.filter((games)=>games.fav===true).length}/>}/>
       <Route path='MyGames' element={<MyGames games={mygames}/>}/>
      </Routes>
    </main>
  </>
  );
}

export default App;
