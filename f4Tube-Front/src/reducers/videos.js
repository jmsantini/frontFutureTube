const initialState = {
    allVideos: [],
    selectedVideoId: ""
};


const videos = (state = initialState, action) => {
    switch (action.type) {
        case "SET_FEED":
            return { ...state, allVideos: action.payload.feed }
        case "SET_VIDEO_ID":
            return { ...state, selectedVideoId: action.payload.videoId }

        default:
            return state;
    }
}


export default videos;