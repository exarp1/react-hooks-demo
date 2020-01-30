const speakersReducer = (state, action) => {
  const updateFavorite = favoriteValue => {
    return state.map(item => {
      if (item.id === action.sessionId) {
        item.favorite = favoriteValue
        return item
      }
      return item
    })
  }
  switch (action.type) {
    case 'setSpeakerList': {
      return action.data
    }
    case 'favorite': {
      return updateFavorite(true)
    }
    case 'unfavorite': {
      return updateFavorite(false)
    }
    default:
      return state
  }
}
export default speakersReducer
