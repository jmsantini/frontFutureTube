import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router"

const baseURL = "https://rjcm2ecohe.execute-api.us-east-1.amazonaws.com/Letube"

const setFeed = (feed) => ({
    type: 'SET_FEED',
    payload: {
        feed
    }
})



export const getFeed = () => async (dispatch) => {

    try{
        const response = await axios.get(`${baseURL}/feed`)

        dispatch(setFeed(response.data.feed))
        console.log(response.data)

    }catch(error){
        window.alert("Erro ao carregar o Feed!")
    }

}