import Gamecard from "./Gamecard";

export default function GameShop({games, name, photo}){
    return(<>
    <Gamecard games={games}/>
    <p>{name}</p>
    <img src={photo} alt= {`bilde av ${name}`}/>
    <a href={``}><button>Buy now</button></a>


    </>)
}