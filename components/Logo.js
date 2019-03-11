import dynamic from "next/dynamic";

const P5Wrapper = dynamic(import("react-p5-wrapper"), {
  loading: () => "",
  ssr: false,
});

// spinning logo
function sketch(p) {
  let t = 0;
  let rand = [];

  p.setup = function() {
    p.createCanvas(200, 200);

    p.noStroke();
    p.fill(51);
    rand = [
      p.random(-180, 180),
      p.random(-180, 180),
      p.random(-180, 180),
      p.random(-180, 180),
    ];
  };

  p.draw = function() {
    if (!(round(t) % 12)) {
      p.background(256, 60);
    }

    var k = p.width / 4;

    [[k * 1, k * 1], [k * 3, k * 1], [k * 1, k * 3], [k * 3, k * 3]].forEach(
      function(arr, i) {
        let x = arr[0];
        let y = arr[1];
        let r = rand[i];

        // each particle moves in a circle
        let myX = x + 30 * p.cos(2 * p.PI * t + r);
        let myY = y + 30 * p.sin(2 * p.PI * t + r);

        p.ellipse(myX, myY, 8); // draw particle
      }
    );

    t = t + 0.01; // update time
  };
}

function round(x) {
  return Number.parseFloat(x).toFixed(4);
}

const Link = params => (
  <div className={params.className}>
    <P5Wrapper sketch={sketch} />
  </div>
);

export default Link;
