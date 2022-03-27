import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class YouTube extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${this.props.videoId}?rel=0`}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
    );
  }
}

const App = () => (
  <div style={styles}>
    <Hello name="weon" />
    <h2>Estas aburrido???? MIRA ESTE VIDEO CULIADISIMO1!!!</h2>
    <YouTube videoId="qk1TRiB4nc8" />
  </div>
);

render(<App />, document.getElementById("root"));

