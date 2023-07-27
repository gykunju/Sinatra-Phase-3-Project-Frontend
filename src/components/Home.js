import React, { useEffect, useState } from 'react'
import GameCards from './GameCards'
import '../styles/Home.css'
import "../styles/GameCards.css"
import { fetchGames } from './api'

function Home({baseURL}) {
  const [games, setGames] = useState([])
  const [state, setState] = useState("Trending")

  useEffect(()=>{
    fetchGames(baseURL, state)
    .then(data=>setGames(data))
  },[baseURL, state])


  return (
    <div >
      <div class="select-container">
        <label for="stateSelect">Choose a state:</label>
        <select id="stateSelect" className="select"  value ={state} onChange={(e)=>setState(e.target.value)}>
            <option name="state1" value={"Trending"}>Trending</option>
            <option name="state2" value={"Sports"}>Sports</option>
            <option name="state3" value={"RPG"}>RPG</option>
            <option name="state3" value={"FPS"}>FPS</option>
            <option name="state3" value={"Fighting"}>Fighting</option>
            <option name="state3" value={"Racing"}>Racing</option>
            <option name="state3" value={"Platformer"}>Platformer</option>
            <option name="state3" value={"Simulation"}>Simulation</option>
        </select>
        <h1 id="currentState">{state}</h1>
        <small>KNOW YOUR GAME</small>
      </div>
      <div className= "home">
        {games.map(game =>(<GameCards
        key={game.id}
        id={game.id}
        image ={game.image}
        name = {game.name}
        description = {game.description}
        likes = {game.likes}
        site_link = {game.site_link}
        company = {game.company_name}
        state={game.favorite}
        baseURL={baseURL}
         />
      ))}
      </div>
    </div>
  )
}

export default Home