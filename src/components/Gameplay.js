import React, { useEffect, useState } from 'react'
import "../styles/Gameplay.css"

function Gameplay({baseURL}) {

  const [gameplay, setGameplay] = useState([])

  useEffect(()=>{
    fetch(`${baseURL}/gameplay`).then(resp=>resp.json()).then(data=>setGameplay(data))
},[])
  return (
    <div className='gameplay-div'>
      {gameplay.map(game =>{
        return(
          <div key={game.id} className="gameplay-card">
            <h3>{game.name}</h3>
            <iframe 
            allowFullScreen
            title={game.name} src={game.link}/>
          </div>
        )
      })}
    </div>
  )
}

export default Gameplay