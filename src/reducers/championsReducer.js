const initState= {
   champions : []
}

const championsReducer = (state = initState, action) => {
   switch(action.type){
      case "FETCH_CHAMPS":
         return {...state, champions: action.payload.champions}
      default:
         return {...state}
   }
}

export default championsReducer;