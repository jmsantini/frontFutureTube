import React, { Component } from "react";
import styled from "styled-components";
import { routes } from "../Router"
import logo from "../../resources/logo.png";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import Button from "@material-ui/core/Button"
import Loading from "../../components/Loading"
import { getFeed } from "../../actions/feed";
import { getUserProfile } from "../../actions/user";
import Header from "../../components/header/header"
import { deleteVideo } from "../../actions/videos";


const MainDiv = styled.div`
    list-style: none;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
`;



const LogoHome = styled.img`
    width:170px;
`;

const VideoDetails = styled.div`
    display: flex;
    flex-wrap: wrap;
`

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
    constructor(props) {
        super(props);

        this.state = {
            search: ""
        }
    }

    componentDidMount(dispatch) {
        const accessToken = window.localStorage.getItem("accessToken")
        if (accessToken) {
            this.props.getFeed()
            this.props.getUserProfile()
        } else {
            this.props.goToHome()
        }
    }

    handleFieldChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
        this.setState({ search: event.target.value })
    };


    handleLogout = () => {
        localStorage.removeItem("accessToken")
        this.props.goToHome()
    }

    handleDeleteVideo = (videoId, title) => {
        this.props.deleteVideo(videoId, title)
    }




    render() {
        const { search, feed } = this.state

        const { id } = this.props.profile

        let filterByUser = this.props.feed.filter((video) => {
            return video.user_id === id
        })

        let filterVideos = filterByUser.filter((video) => {
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
                        <button onClick={() => this.handleDeleteVideo(video.id, video.title)} >X</button>
                    </ul>

                )}
            </VideoDetails>
        )
        const isLogged = window.localStorage.getItem("accessToken")
        let buttonRender
        if (isLogged) {
            buttonRender = (<Header onClick={this.props.goToHome}
                button1={"Home"} onClick1={this.props.goToHome}
                button2={"Logout"} onClick2={this.handleLogout}
                value={feed} onChange={this.handleFieldChange}
            />)
        }

        return (
            <MainDiv>
                {buttonRender}
                <div>
                    <ListCategory>
                        <Button onClick={this.props.goToPostVideo} >Post Video</Button>
                        <Button onClick={this.props.goToChangePW} >Change Password</Button>
                    </ListCategory>
                </div>
                <FeedVideos>
                    {videosIsReady}
                </FeedVideos>
                <FooterHome>
                    <LogoHome src={logo} />
                </FooterHome>
            </MainDiv>
        );
    }
}

const mapStateToProps = state => ({
    feed: state.videos.allVideos,
    profile: state.user.profile,
    videoId: state.videos.selectedVideoId
})

const mapDispatchToProps = (dispatch) => ({
    goToHome: () => dispatch(push(routes.Home)),
    goToPostVideo: () => dispatch(push(routes.PostVideo)),
    goToChangePW: () => dispatch(push(routes.ChangePW)),
    getFeed: () => dispatch(getFeed()),
    getUserProfile: () => dispatch(getUserProfile()),
    deleteVideo: (videoId, title) => dispatch(deleteVideo(videoId, title))
})



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfile);
