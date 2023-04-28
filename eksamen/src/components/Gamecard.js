export default function Gamecard({games}){
    return (
        <div>

                {games?.map((g, index) => (
                                    <div>
                                        <p>{g.name}</p>
                                        <img src={g.background_image} alt= {`bilde av ${g.name}`}/>
                                        <a href=""><button>Buy now</button></a>
                                    </div>))}    

        </div>

        
    )
}