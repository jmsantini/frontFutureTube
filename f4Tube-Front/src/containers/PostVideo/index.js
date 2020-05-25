import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"
import styled from "styled-components";
import { connect } from "react-redux";
import logo from "../../resources/logo.png";
import { createVideo } from "../../actions/videos";




const DivContet = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  background-color: #c5b6ff;
  height: 100vh;
  align-items: center;
`


const HeaderLogin = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding:20px;
  background-color: #c5b6ff;
  align-items: center;
`


const SignUpWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

const LogoHome = styled.img`
    width:350px;
`;



class PostVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      link: "",
      description: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handlePostButton = () => {
    this.props.createVideo(this.state.title, this.state.link, this.state.description)
  }


  render() {
    const { title, link, description } = this.state;

    return (

      <DivContet>
        <HeaderLogin>
          <a href="/" > <LogoHome src={logo} /> </a>
        </HeaderLogin>
        <h3>Postar Video</h3>

        <SignUpWrapper>
          <TextField
            onChange={this.handleFieldChange}
            name="title"
            type="text"
            label="Title"
            required={true}
            value={title}
          />

          <TextField
            onChange={this.handleFieldChange}
            name="link"
            type="text"
            label="ID Video"
            required={true}
            value={link}
          />

          <TextField
            onChange={this.handleFieldChange}
            name="description"
            type="text"
            label="Description"
            required= {true}
            value={description}
          />
          <Button onClick={this.handlePostButton}>Cadastrar</Button>
        </SignUpWrapper>
      </DivContet>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createVideo: (title, link, description) => dispatch(createVideo(title, link, description))

})

export default connect(
  null,
  mapDispatchToProps
)(PostVideo);