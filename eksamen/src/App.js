import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {mygames} from "./components/games"
import Dashboard from './components/Dashboard';
import GameShop from './components/GameShop';
import MyGames from './components/MyGames';
import MyFavorites from './components/MyFavorites';


function App() {

  


  return (
    <div id='container'>
      <Routes>
       <Route path='/' element={<Dashboard/>}/>
       <Route path='GameShop' element={<GameShop/>}/>
       <Route path="MyFavorites" element={<MyFavorites sliceVal={mygames.filter((games)=>games.fav===true).length}/>}/>
       <Route path='MyGames' element={<MyGames games={mygames}/>}/>
      </Routes>
    </div>
    
  );
}

export default App;
