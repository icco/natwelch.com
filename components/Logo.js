import React from "react";
import { SVG } from "@svgdotjs/svg.js";
import "@svgdotjs/svg.topath.js";
import Vivus from "vivus"

// This modifies the DOM, as such, can only be called from componentDidMount.
function buildSVG(size, el) {
  let canvas = SVG().addTo(el).size(size, size);
  canvas.id("logo")
  let k = size / 4;
  [[k * 1, k * 1], [k * 3, k * 1], [k * 1, k * 3], [k * 3, k * 3]].forEach(
    function(arr, i) {
      // Set the radius
      let c = canvas.circle(size / 4.0 + size / 10.0);

      // Put it where we want to
      c.cx(arr[0]);
      c.cy(arr[1]);

      // Style it
      c.fill("none");
      c.stroke({
        width: 0.04 * size,
        color: "#000",
      });
      let path = c.toPath();
    }
  );
}

class Logo extends React.Component {
  componentDidMount() {
    const { size } = this.props;
    buildSVG(size, this.refs.svg);
    new Vivus("logo", { duration: 200 });
  }

  render() {
    const { size } = this.props;

    return (
      <div
        style={{ width: `${size}px`, height: `${size}px` }}
        className={this.props.className}
        ref="svg"
      />
    );
  }
}

export default Logo;
