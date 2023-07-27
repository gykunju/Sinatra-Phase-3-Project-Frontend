import React, { useEffect, useState } from 'react'
import GameCards from './GameCards'
import '../styles/Home.css'
import "../styles/GameCards.css"
import { fetchFavorites, fetchGames } from './api'

function Home({baseURL, favorited, handleFavorite,setSpecificId}) {
  const [games, setGames] = useState([])
  const [state, setState] = useState("Trending")


  useEffect(()=>{
    fetchGames(baseURL)
    .then(data=>setGames(data))
  },[baseURL])


  return (
    <div >
      <div class="select-container">
        <label for="stateSelect">Choose a state:</label>
        <select id="stateSelect" className="select" onChange={(e)=>setState(e.target.value)}>
            <option name="state1">Trending</option>
            <option name="state2">Sports</option>
            <option name="state3">RPG</option>
            <option name="state3">FPS</option>
            <option name="state3">Fighting</option>
            <option name="state3">Racing</option>
            <option name="state3">Platformer</option>
            <option name="state3">Simulation</option>
        </select>
        <h1 id="currentState">{state}</h1>
      </div>
      <div className= "home">
        {games.map(game =>(<GameCards
        id={game.id}
        image ={game.image}
        name = {game.name}
        description = {game.description}
        likes = {game.likes}
        site_link = {game.site_link}
        company = {game.company_name}
        state={game.favorite}
        baseURL={baseURL}
         />))}
      </div>
    </div>
  )
}

export default Home