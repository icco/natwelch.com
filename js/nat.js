/**
 * JS for natwelch.com
 */

// Add spinning logo
let t = 0
let rand = []

function setup() {
  var cnv = createCanvas(200, 200);
  cnv.parent('logo');

  noStroke();
  fill(51);
  rand = [
    random(-180, 180),
    random(-180, 180),
    random(-180, 180),
    random(-180, 180)
  ]
}

function draw() {
  if (!(round(t) % 12)) {
    background(256, 60);
  }

  var p = (width / 4);

  [
    [ p * 1, p * 1 ],
    [ p * 3, p * 1 ],
    [ p * 1, p * 3 ],
    [ p * 3, p * 3 ]
  ].forEach(function(arr, i) {
    let x = arr[0]
    let y = arr[1]
    let r = rand[i]

    // each particle moves in a circle
    let myX = x + 30 * cos(2 * PI * t + r);
    let myY = y + 30 * sin(2 * PI * t + r);

    ellipse(myX, myY, 8); // draw particle
  })


  t = t + 0.01; // update time
}

function round(x) {
  return Number.parseFloat(x).toFixed(4);
}

// Google
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-333449-2');
