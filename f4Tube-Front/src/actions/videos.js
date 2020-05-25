import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router"
import { getFeed } from "./feed";

const baseURL = "https://rjcm2ecohe.execute-api.us-east-1.amazonaws.com/Letube"


export const deleteVideo = (videoId, title) => async (dispatch) => {
    const token = localStorage.getItem("accessToken")

    try {
        if (window.confirm("Quer deletar o video?")) {
            await axios.delete(`${baseURL}/deleteVideo/${videoId}`,{
                headers:{
                    Authorization: token
                }
            })
            window.alert(`O video ${title} foi deletado`)
            dispatch(getFeed())
        }

    } catch (error) {
        window.alert("Erro ao deletar o video")
    }
}

export const createVideo = (title, link, description) => async (dispatch) => {
    const token = localStorage.getItem("accessToken")

    const newVideo = {
        title,
        link,
        description
    }
    try {
        await axios.post(`${baseURL}/createVideo`, newVideo, {
            headers: {
                Authorization: token,
            }
        })

        window.alert("Video Cadastrado!")
        dispatch(push(routes.Home))

    } catch (error) {
        window.alert("Erro ao cadastrar video!")
    }
}