const initialState = {
    profile: {}
}
const user = ( state = initialState, action) => {
    switch(action.type){
        case "SET_USER_PROFILE":
            return { ...state, profile: action.payload.user}
        default:
            return state
    }
}
export default user;