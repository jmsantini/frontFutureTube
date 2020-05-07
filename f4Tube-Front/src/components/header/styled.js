import styled from 'styled-components';
// containers
export const StyledHeader = styled.header`
    width: 100%;
    min-width: 300px;
    height: 100px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    background-color: #c5b6ff;
    color: white;
    font-family: 'Manrope', sans-serif;
    @media (max-width: 800px) {
        height: 350px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`
export const StyledLogo = styled.img `
    width: 160px;
    height: 100%;
    margin: 0;
    :hover {
        cursor: pointer;
        opacity: 80%;
    }
    @media (max-width: 700px) {
        width: 250px;
    }
`
export const LogoContainer = styled.div `
    width: 200px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    @media (max-width: 700px) {
        height: 130px;
        width: 100%;
    }
    @media (max-width: 300px) {
        height: 80px;
    }
`
export const SearchContainer = styled.div `
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding-left: 100px;
    @media (max-width: 1150px){
        width: 50%;
        padding-left: 30px;
    }
    @media (max-width: 700px){
        width: 100%;
        height: 80px;
        padding: 0;
    }
`
export const ButtonMenu = styled.menu `
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0;
    padding: 10px;
    @media (max-width: 1150px){
        width: 50%;
    }
    @media (max-width: 700px){
        width: 100%;
        height: 140px;
        flex-direction: column;
    }
    @media (max-width: 400px){
        height: 160px;
        flex-direction: column;
    }
`
// button 
export const StyledButton = styled.button `
    width: 100px;
    height: 30px;
    border: 0;
    outline: 0;
    background-color: #c5b6ff;
    border-radius: 5px;
    color: white;
    :hover {
        cursor: pointer;
        background-color: white;
        border: 1px solid #c5b6ff;
        color: #c5b6ff;
    }
    @media(max-width: 700px){
        width: 60%;
        max-width: 200px;
    }
`
// inputs
export const StyledInput = styled.input `
    width: 70%;
    height: 20px;
    border: 0;
    margin: 0;
    background-color: #c5b6ff;
    border-bottom: 1px solid white;
    color: black;
    outline: none;
    @media (max-width: 1150px){
        width: 90%;
    }
    @media (max-width: 700px){
        width: 90%;
    }
`