import React from "react";
import { OAuth } from "oauthio-web";
export default class FacebookAuth extends React.Component {
  state = {
    access_token: ""
  };
  componentDidMount() {
    OAuth.initialize(this.props.api_key);
  }
  Auth = () => {
    OAuth.popup("facebook")
      .done(res => {
        this.setState({ access_token: res.access_token });
      })
      .fail(err => {
        //todo when the OAuth flow failed
      });
  };

  render() {
    return (
      <button onClick={this.Auth} className="btn btn-tw btn-block">
        Sign in with facebook
      </button>
    );
  }
}
