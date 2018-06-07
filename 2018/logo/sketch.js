let t = 0; // time variable

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(10, 10); // translucent background (creates trails)

  [
    [ 50, 50 ],
    [ 150, 50 ],
    [ 50, 150 ],
    [ 150, 150 ]
  ].forEach(function(arr) {
    let x = arr[0]
    let y = arr[1]
    // starting point of each circle depends on mouse position
    let xAngle = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
    let yAngle = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
    // and also varies based on the particle's location
    let angle = xAngle * (x / width) + yAngle * (y / height);

    // each particle moves in a circle
    let myX = x + 20 * cos(2 * PI * t + angle);
    let myY = y + 20 * sin(2 * PI * t + angle);

    ellipse(myX, myY, 10); // draw particle
  })

  t = t + 0.01; // update time
}
