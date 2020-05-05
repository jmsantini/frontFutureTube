import React, { Component } from "react";
import styled from "styled-components";
import { routes } from "../Router"
import logo from "../../resources/logo.png";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import Button from "@material-ui/core/Button"


const MainDiv = styled.div`
    list-style: none;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
`;

const HeaderHome = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding:20px;
    background-color: #c5b6ff;
    align-items: center;
`

const NavHome = styled.nav`
    display:flex;
`

const PesquisaHome = styled.input`
    width: 250px;
    height: 30px;
`;

// const ButtonHeader = styled.button`
//     color: black;
//     padding: 10px 32px;
//     font-size: 18px;
//     margin: 4px 2px;
//     cursor: pointer;
// `;

const LogoHome = styled.img`
    width:170px;
`;

const FeedVideos = styled.div`
   
`;

const ListCategory = styled.li`
    display: flex;
    background-color: #A14AE8;
    justify-content: space-between;
    padding: 5px;
    border: solid 2px black;
`;


const FooterHome = styled.div`
    background-color: #c5b6ff;
    height: 40px;
    width:100%;
    position:fixed;
    bottom: 0px;
    text-align:center;
`;

export class UserProfile extends Component {


    handleLogout = () => {
        localStorage.removeItem("accessToken")
        this.props.goToHome()
    }


    render() {
        return (
            <MainDiv>
                <HeaderHome>
                    <LogoHome src={logo} />
                    <div>
                        <PesquisaHome /> <Button>Buscar</Button>
                    </div>
                    <NavHome>
                        <li>
                            <Button onClick={this.props.goToHome} >Home </Button>
                            <Button onClick={this.handleLogout} >Logout </Button>
                        </li>
                    </NavHome>
                </HeaderHome>
                <div>
                    <ListCategory>
                        <Button onClick={this.props.goToPostVideo} >Post Video</Button>
                        <Button>Change Password</Button>
                    </ListCategory>
                </div>
                <FeedVideos>
                    <h1>Videos Postados pelo Usuarios LOGADO</h1>
                </FeedVideos>
                <FooterHome>
                    <LogoHome src={logo} />
                </FooterHome>
            </MainDiv>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    goToHome: () => dispatch(push(routes.Home)),
    goToPostVideo: () => dispatch(push(routes.PostVideo)),
})



export default connect(
    null,
    mapDispatchToProps
)(UserProfile);
