import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"
import styled from "styled-components";
import { routes } from "../Router/index";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import logo from "../../resources/logo.png";
import { createUser } from "../../actions/user";



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



class SingUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      birthdate: "",
      photo: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSignupButton = () => {
    this.props.createUser(this.state.name, this.state.email, this.state.birthdate, this.state.password, this.state.photo)
  }


  render() {
    const { name, email, birthdate, password, photo } = this.state;

    return (

      <DivContet>
        <HeaderLogin>
          <a href="/" > <LogoHome src={logo} /> </a>
        </HeaderLogin>

        <SignUpWrapper>
          <TextField
            onChange={this.handleFieldChange}
            name="email"
            type="email"
            label="E-mail"
            value={email}
          />

          <TextField
            onChange={this.handleFieldChange}
            name="name"
            type="text"
            label="Nome"
            value={name}
          />

          <TextField
            onChange={this.handleFieldChange}
            name="password"
            type="password"
            label="Password"
            value={password}
          />

          <TextField
            onChange={this.handleFieldChange}
            name="birthdate"
            type="date"
            label="Birth Date"
            value={birthdate}
          />

          <TextField
            onChange={this.handleFieldChange}
            name="photo"
            type="text"
            label="Photo"
            value={photo}
          />
          <Button onClick={this.handleSignupButton}>Cadastrar</Button>
        </SignUpWrapper>
      </DivContet>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createUser: (name, email, birthdate, password, photo) => dispatch(createUser(name, email, birthdate, password, photo)),
  goToHome: () => dispatch(push(routes.Home))

})

export default connect(
  null,
  mapDispatchToProps
)(SingUp);