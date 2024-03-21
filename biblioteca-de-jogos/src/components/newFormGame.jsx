import { useState } from "react"
import Input from "./input"

export default function NewFormGame({addGame}){
    const [title, setTitle] = useState("")
    const [cover, SetCover] = useState("")
    
    const handleSubmit = (ev) => {
        ev.preventDefault()
        addGame({title,cover})
        setTitle("")
        SetCover("")
       }
    
    return(
       <form>
        <Input value={title} label="Titulo" setValue={setTitle}></Input>
        <Input value={cover} label="Capa" setValue={SetCover}></Input>
        <button type="submit" onClick={handleSubmit}>Adicionar á biblioteca</button>
      </form>
    )
}

