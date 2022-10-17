import React, { Component } from "react";
import { connect } from "react-redux";

class MyMemes extends Component {
  render() {
    return (
      <div
        style={{
          display: "grid",
          gridAutoFlow: "column",
          alignItems: "start",
          justifyItems: "start",
          gridColumnGap: "17px",
          gridTemplateColumns: "repeat(auto-fill,minmax(220px, max-content))",
        }}
      >
        {this.props.myMemes.map((meme, index) => {
          return (
            <div>
              <img key={index} src={meme.data.url} alt="my-meme" className="my-meme-img" />
              <span style={{ position: "absolute" }}>X</span>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myMemes: state.myMemes,
  };
};

export default connect(mapStateToProps, null)(MyMemes);
