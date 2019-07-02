import React from "react";
import SVG from "svg.js";

function buildSVG(size, el) {
  console.log(el);
  let canvas = SVG(el).size(size, size);
  let k = size / 4;
  [[k * 1, k * 1], [k * 3, k * 1], [k * 1, k * 3], [k * 3, k * 3]].forEach(
    function(arr, i) {
      // Set the radius
      let c = canvas.circle(size / 4.0 + size / 10.0);

      // Put it where we want to
      c.cx(arr[0]);
      c.cy(arr[1]);

      // Style it
      c.fill({ color: "#fff", opacity: 0.0 });
      c.stroke({
        width: 0.04 * size,
        color: "#000",
      });
    }
  );

  //new Vivus('drawing', { duration: 200 }, myCallback);
  return el;
}

class Logo extends React.Component {
  componentDidMount() {
    const { size } = this.props;
    buildSVG(size, this.refs.svg);
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
