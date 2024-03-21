import Games from "./components/games"
import NewFormGame from "./components/newFormGame"
import UseGame from "./hooks/useGame"

export default function App(){
   const {addGame, removeGame, games} = UseGame()

  return(
   <div id="app">
      <h1>Biblioteca de Jogos</h1>
        <NewFormGame addGame={addGame}/>
        <div className="games">
           {games.map((game)=> (
           <Games key={game.id} title={game.title} cover={game.cover} id={game.id} removeGame={removeGame}/>
            ))}
        </div>
   </div>
  )
}