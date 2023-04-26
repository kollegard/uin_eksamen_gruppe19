import { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {

  const [games, setGames] = useState ([])

  
  const info = async() =>{
    const response = await fetch (`https://api.rawg.io/api/games?key=a9cc790b6f6e4c0481c8687987fea064&platforms=4`)
    //https://rapidapi.com/accujazz/api/rawg-video-games-database/discussions/14722
    const data = await response.json()
    //id 4 er pc

    setGames(data.results)
  }
  // hentet fra Mathias Kollegård sitt arbeidskrav 4

  
  console.log(games)

useEffect(() => {
  info()
  }, [])
  //https://legacy.reactjs.org/docs/hooks-effect.html



  return (
    <Dashboard games={games}/>
  );
}

export default App;
