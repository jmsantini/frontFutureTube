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

const setCreateUser = (user) => ({
    type: "CREATE_USER",
    payload: {
        user
    }
})

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

    } catch(error){
        window.alert('Erro no cadastro')
    }

}