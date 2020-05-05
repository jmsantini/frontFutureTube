import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { routes } from "../Router"
import logo from "../../resources/logo.png";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import Button from "@material-ui/core/Button"
import { getFeed } from "../../actions/feed";
import Loading from "../../components/Loading"


const MainDiv = styled.div`
    list-style: none;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    min-width: 610px;
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

const LogoHome = styled.img`
    width:170px;
`;



const VideoDetails = styled.div`
    display: flex;
    flex-wrap: wrap;
`


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

export class Home extends Component {

    componentDidMount() {
        this.props.getFeed()
    }


    render() {

        const videosIsReady = this.props.feed.length === 0 ? <Loading/> : (
            <VideoDetails>
                {this.props.feed.map((video) =>
                    <ul>
                        <iframe allowFullScreen
                            src={`https://www.youtube.com/embed/${video.link}`}>
                        </iframe>
                        <h3>{video.title}</h3>
                    </ul>

                )}
            </VideoDetails>
        )

        return (
            <MainDiv>
                <HeaderHome>
                    <LogoHome src={logo} />
                    <div>
                        <PesquisaHome /> <Button>Buscar</Button>
                    </div>
                    <NavHome>
                        <li>
                            <Button onClick={this.props.goToLogin} >Login</Button>
                            <Button onClick={this.props.goToSignUp} >SingUp</Button>
                        </li>
                    </NavHome>
                </HeaderHome>
                <div>
                    <ListCategory>
                        <Button>Filmes</Button>
                        <Button>Musica</Button>
                        <Button>Infantil</Button>
                        <Button>Documentario</Button>
                    </ListCategory>
                </div>

                {videosIsReady}

                <FooterHome>
                    <LogoHome src={logo} />
                </FooterHome>
            </MainDiv>
        );
    }
}

const mapStateToProps = state => ({
    feed: state.videos.allVideos,
})


const mapDispatchToProps = (dispatch) => ({
    goToLogin: () => dispatch(push(routes.LoginPage)),
    goToSignUp: () => dispatch(push(routes.SignUp)),
    getFeed: () => dispatch(getFeed())

})



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
