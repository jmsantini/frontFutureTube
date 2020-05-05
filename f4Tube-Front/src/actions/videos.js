import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router"

const baseURL = "https://rjcm2ecohe.execute-api.us-east-1.amazonaws.com/Letube"

const setPostVideo = (postvideo) => ({
    type: "CREATE_VIDEO",
    payload: {
        postvideo
    }
})

export const createVideo = ( title, link,description ) => async (dispatch) => {
    const token = localStorage.getItem("accessToken")

    const newVideo = {
        title,
        link,
        description
    }
    try{
        await axios.post(`${baseURL}/createVideo`, newVideo,{
            headers:{
                Authorization: token,
            }
        })

        window.alert("Video Cadastrado!")
        dispatch(push(routes.Home))

    }catch(error){
        window.alert("Erro ao cadastrar video!")
    }
}