import logo from './logo.svg';
import './App.css';

function App() {

  
  const games = async() =>{
    const response = await fetch (`https://api.rawg.io/api/platforms?key=a9cc790b6f6e4c0481c8687987fea064`)
    const data = await response.json()
    console.log(data)
  }

games()



  return (
    <div className="App">
      
    </div>
  );
}

export default App;
