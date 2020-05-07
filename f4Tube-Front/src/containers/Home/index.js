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
    width:100%;
    height: 100vh;
    list-style: none;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    min-width: 610px;
`;

const HeaderHome = styled.div`
    display:flex;
    flex-wrap: wrap;
    width: 100%;
    height: 150px;
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
const FooterHome = styled.div`
    background-color: #c5b6ff;
    height: 80px;
    width:100%;
    text-align:center;
`;

export class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ""
        }
    }

    componentDidMount() {
        this.props.getFeed()
    }

    handleFieldChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
        this.setState({ search: event.target.value })
    };


    render() {

        const { search, feed } = this.state

        let filterVideos = this.props.feed.filter((video) => {
            return video.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
                video.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });

        const videosIsReady = this.props.feed.length === 0 ? <Loading /> : (
            <VideoDetails>
                {filterVideos.map((video) =>
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
                        <PesquisaHome value={feed} onChange={this.handleFieldChange} />
                    </div>
                    <NavHome>
                        <li>
                            <Button onClick={this.props.goToLogin} >Login</Button>
                            <Button onClick={this.props.goToSignUp} >SingUp</Button>
                        </li>
                    </NavHome>
                </HeaderHome>

                <div>
                    {videosIsReady}
                </div>

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
