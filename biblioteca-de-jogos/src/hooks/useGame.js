import { useState } from "react";

export default function UseGame(){
    const [games, setGames] = useState(() =>{
        const storedGames = localStorage.getItem("game-lib")
        if(!storedGames) return []
        return JSON.parse(storedGames)
      }
      )
       
       const addGame = ({title, cover}) => {
          const id = Math.floor(Math.random() * 1000000)
          const game = { id , title, cover}
          setGames(states => {
            const newState =[...states, game]
            localStorage.setItem("game-lib", JSON.stringify(newState))
            return newState
          })
       }
    
        const removeGame = (id) => {
          setGames(states => {
             const newState = states.filter(game => game.id !== id)
             localStorage.setItem("game-lib" , JSON.stringify(newState))
             return newState
          })
    
        }

        return {games, addGame, removeGame}
}