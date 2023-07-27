
export const fetchGames = async (baseURL) =>{
    const response = await fetch(`${baseURL}/games`)
    const data = await response.json()
    return data
}

export const fetchReviews = async (gameId, baseURL) => {
    const response = await fetch(`${baseURL}/reviews/${gameId}`);
    const data = await response.json();
    return data;
  };
  

  export const addReview = async (gameId, reviewText, baseURL) => {
    const response = await fetch(`${baseURL}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        game_id: gameId,
        comment: reviewText,
        name: ""
      }),
    });
    const data = await response.json();
    return data;
  };

  export const addLikes = async (gameId, newLikeCount, baseURL) =>{
    const response = await fetch(`${baseURL}/games/${gameId}`,{
    method:"PATCH",
    headers:{
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({likes: newLikeCount}),
})
}

 export const handleFavorite = async (gameId, state, baseURL) =>{
    const response = await fetch(`${baseURL}/favorites/${gameId}`,{
    method:"PATCH",
    headers:{
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({favorite: state}),
})
}

export const fetchFavorites = async (baseURL)=>{
    const response = await fetch(`${baseURL}/favorites`)
    const data = await response.json()
    return data
}