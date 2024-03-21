export default function Games({title, cover, removeGame, id}){
    return(
        <div>
        <img src={cover} alt="" />
        <div>
          <h2>{title}</h2>
          <button onClick={()=> removeGame(id)}>Remover</button>
        </div>
    </div>
    )
}