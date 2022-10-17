import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/index.css";

import { Form, FormGroup, FormControl, FormLabel } from "react-bootstrap";

import MemeItem from "./MemeItem";
import MyMemes from "./MyMemes";

class App extends Component {
  constructor() {
    super();

    this.state = {
      memeLimit: 10,
      text0: "",
      text1: "",
    };
  }
  render() {
    return (
      <div>
        <h2>
          <u>Welcome to the Meme Generator</u>

          <MyMemes />
        </h2>
        <h4>
          <i>Write Some Text</i>
        </h4>
        <Form inline>
          <FormGroup>
            <FormLabel>Top</FormLabel>{" "}
            <FormControl type="text" onChange={(e) => this.setState({ text0: e.target.value })} />
          </FormGroup>
          <FormGroup>
            <FormLabel>Bottom</FormLabel>{" "}
            <FormControl type="text" onChange={(e) => this.setState({ text1: e.target.value })} />
          </FormGroup>
        </Form>
        {this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
          return <MemeItem key={index} meme={meme} text0={this.state.text0} text1={this.state.text1} />;
        })}
        <div className="meme-button" onClick={() => this.setState({ memeLimit: this.state.memeLimit + 10 })}>
          Load 10 more memes ...
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, null)(App);
