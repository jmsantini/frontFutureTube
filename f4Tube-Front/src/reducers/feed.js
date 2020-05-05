const initialState = {
    allVideos: []
};


const videos = (state = initialState, action) => {
    switch (action.type) {
        case "SET_FEED":
            return { ...state, allVideos: action.payload.feed }
        default:
            return state;
    }
}


export default videos;