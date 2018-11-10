import React, { Component } from "react";

import "./App.css";

import Header from "./Header";

//connect 에 필요한 모듈
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "./actions";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
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
