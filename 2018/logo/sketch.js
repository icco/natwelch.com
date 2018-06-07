
  var r = random(50);

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  stroke(r * 5);
  strokeWeight(8);

  var radi = 75

  ellipse( 50,  50, radi, radi);
  ellipse(150,  50, radi, radi);
  ellipse( 50, 150, radi, radi);
  ellipse(150, 150, radi, radi);
}
