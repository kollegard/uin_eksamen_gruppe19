import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [games, setGames] = useState ([])

  
  const info = async() =>{
    const response = await fetch (`https://api.rawg.io/api/platforms?key=a9cc790b6f6e4c0481c8687987fea064`)
    const data = await response.json()

    setGames(data.results)

    console.log(games) 
  }

useEffect(() => {
  info()
  }, [])
  //https://legacy.reactjs.org/docs/hooks-effect.html



  return (
    <div className="App">
      
    </div>
  );
}

export default App;
