import React, { Component } from "react";

import "./App.css";

import Header from "./components/Header";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";

import Login from "./Login";

//connect 에 필요한 모듈
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "./actions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Login auth={this.props.auth} actions={this.props.actions} />
        <Loading loading={this.props.loading} />
        <ErrorMessage errorMessage={this.props.errorMessage} />
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(App);
