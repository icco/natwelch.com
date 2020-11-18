let t = 0; // time variable
let rand = [];

function setup() {
  var cnv = createCanvas(200, 200);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);

  noStroke();
  fill(51);
  rand = [random(50), random(50), random(50), random(50)];
}

function draw() {
  if (!(round(t) % 3)) {
    background(256, 60);
  }

  [
    [50, 50],
    [150, 50],
    [50, 150],
    [150, 150],
  ].forEach(function (arr, i) {
    let x = arr[0];
    let y = arr[1];
    let r = rand[i];

    // each particle moves in a circle
    let myX = x + 30 * cos(2 * PI * t + r);
    let myY = y + 30 * sin(2 * PI * t + r);

    ellipse(myX, myY, 8); // draw particle
  });

  t = t + 0.01; // update time
}

function round(x) {
  return Number.parseFloat(x).toFixed(4);
}
