import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/index";
import LoginPage from "../LoginPage/index"
import PostVideo from "../PostVideo";
import SignUp from "../SignUp";
import UserProfile  from "../UserProfile";




export const routes = {
  Home: "/",
  LoginPage: "/login",
  PostVideo: "/postVideo",
  SignUp: "/signUp",
  UserProfile: "/Profile",
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.Home} component={Home} />
        <Route exact path={routes.LoginPage} component={LoginPage} />
        <Route exact path={routes.PostVideo} component={PostVideo} />
        <Route exact path={routes.SignUp} component={SignUp} />
        <Route exact path={routes.UserProfile} component={UserProfile} />
        <Route exact path={routes.PostVideo} component={PostVideo} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
