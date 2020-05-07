import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router"

const baseURL = "https://rjcm2ecohe.execute-api.us-east-1.amazonaws.com/Letube"

const loginUser = (login) => ({
    type: "LOGIN_USER",
    payload: {
        login,
    }
})

export const postLoginUser = (email, password) => async (dispatch) => {
    const newPotato = {
        email,
        password
    }

    try {
        const response = await axios.post(`${baseURL}/login`, newPotato)
        window.localStorage.setItem("accessToken", response.data.accessToken);

        window.alert("Login Relizado com sucesso!!!");
        dispatch(push(routes.UserProfile))

    } catch (error) {
        window.alert("Login ou senha incorreta!!!")
    }
}



export const createUser = (name, email, birthdate, password, photo) => async (dispatch) => {

    const data = {
        name,
        email,
        birthdate,
        password,
        photo
    }

    try {
        const response = await axios.post(`${baseURL}/signup`, data)
        window.localStorage.setItem("accessToken", response.data.accessToken);

        window.alert("Cadastro realizado com sucesso!")
        dispatch(push(routes.UserProfile))

    } catch (error) {
        window.alert('Erro no cadastro')
    }

}

export const setUserID = (userID) => ({
    type: "SET_USER_ID",
    payload: {
        userID
    }
})

export const setUserProfile = (user) => ({
    type: "SET_USER_PROFILE",
    payload: {
        user
    }
})

export const getUserProfile = () => async (dispatch) => {
    const accessToken = window.localStorage.getItem("accessToken")
    try {
        const response = await axios.get(`${baseURL}/userByID`, {
            headers: {
                Authorization: accessToken
            }
        })

        dispatch(setUserProfile(response.data.User))

    } catch (error) {
        window.alert("Erro ao renderizar os videos do usuario")
    }
}

export const updatePassword = (email, oldPassword, newPassword) => async (dispatch) => {
    const accessToken = window.localStorage.getItem("accessToken")
    const upPW = {
        email,
        oldPassword,
        newPassword
    }
    try {
        await axios.post(`${baseURL}/changePassword`, upPW,{
            headers: {
                Authorization: accessToken
            }
        })
        window.alert("Trocado Com sucesso!")
        dispatch(push(routes.UserProfile))

    } catch (error) {
        window.alert("Erro ao mudar a senha.")
    }
}