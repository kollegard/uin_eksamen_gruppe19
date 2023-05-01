export default function GameShop({gameArray}){
    console.log(gameArray)
    return(
        <div id="gameshop">
            <section id="gameshop1">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Red_square.svg/240px-Red_square.svg.png" alt="" width="200" height="200"></img>
                <p>title: {gameArray[0].games[0].name}</p>
                <p>genre: </p>
                <button>buy</button>
         </section>
         <section id="gameshop2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Red_square.svg/240px-Red_square.svg.png" alt="" width="200" height="200"></img>
                <p>title: {gameArray[0].games[1].name}</p>
                <p>genre: </p>
                <button>buy</button>
         </section>
         <section id="gameshop3">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Red_square.svg/240px-Red_square.svg.png" alt="" width="200" height="200"></img>
                <p>title: {gameArray[0].games[2].name}</p>
                <p>genre: </p>
                <button>buy</button>
         </section>
        </div>
        
    )
}