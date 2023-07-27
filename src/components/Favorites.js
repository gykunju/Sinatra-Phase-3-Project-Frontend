import React, { useEffect, useState } from 'react'
import '../styles/GameCards.css'
import GameCards from './GameCards'
import { fetchFavorites } from './api'

function Favorites({baseURL, favorited,}) {

  const [favorites, setFavorites] = useState([])

  useEffect(()=>{
    fetchFavorites(baseURL)
    .then(data=>setFavorites(data))
  },[])

  return (
    <div>
      {favorites.map(favorite=>(
        <GameCards
        id={favorite.id}
        image ={favorite.image}
        name = {favorite.name}
        description = {favorite.description}
        likes = {favorite.likes}
        site_link = {favorite.site_link}
        company = {favorite.company_name}
        baseURL={baseURL}
        />
      ))}
      {favorites.length === 0 && <h1 className="empty-favorites">No favorites added yet.</h1>}
    </div>
  )
}

export default Favorites