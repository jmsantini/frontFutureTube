import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"
import styled from "styled-components";
import { routes } from "../Router/index";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import logo from "../../resources/logo.png";
import { updatePassword } from "../../actions/user";



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



class ChangePW extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      oldPassword: "",
      newPassword: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSignupButton = () => {
    this.props.updatePassword(this.state.email, this.state.oldPassword,  this.state.newPassword )
  }


  render() {
    const {  email, oldPassword, newPassword} = this.state;

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
            name="oldPassword"
            type="password"
            label="Current Password"
            value={oldPassword}
          />

          <TextField
            onChange={this.handleFieldChange}
            name="newPassword"
            type="password"
            label="New Password"
            value={newPassword}
          />


          <Button onClick={this.handleSignupButton}>Change</Button>
        </SignUpWrapper>
      </DivContet>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToHome: () => dispatch(push(routes.Home)),
  updatePassword: (email, oldPassword, newPassword) => dispatch(updatePassword(email, oldPassword, newPassword))
})

export default connect(
  null,
  mapDispatchToProps
)(ChangePW);