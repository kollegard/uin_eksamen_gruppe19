export default function MyGames({name, photo}){
console.log(name)

    return(<>
    <p>{name}</p>
    <img src={photo} alt= {`bilde av ${name}`}/>
    <button>Buy now</button></>)
}