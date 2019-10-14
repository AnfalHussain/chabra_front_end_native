
import React, { Component } from "react";
import { Button, Text } from "native-base";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import * as actionCreators from "../../redux/actions/authActions";


class HomePage extends Component {
  render() {
    const logout = () => {
      return (
        <Button danger onPress={this.props.logout}>
          <Text>Logout</Text>
        </Button>
      );
    };

    const login = () => {
      return (
        <Button onPress={() => this.props.navigation.navigate("Login")}>
          <Text>Login</Text>
        </Button>
      );
    };

    return <>{this.props.user ? logout() : login()}</>;
  }
}

const mapStateToProps = state => ({
  user: state.authReducer.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actionCreators.logout()),


  checkForToken: navigation =>
    dispatch(actionCreators.checkForExpiredToken(navigation))


});

export default withNavigation(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage)
);
