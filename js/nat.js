/**
 * JS for natwelch.com
 */
var Nat = {
  updateAge : function () {
    // Make age accurate
    bday = new Date(1988,1,22,17);

    var now = new Date;
    var duration = now - bday;
    var years = duration / 31556900000;

    var majorMinor = years.toFixed(7).toString();

    $('#age').text(majorMinor);
  },
};

// Google Anal
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-333449-2', 'auto');
ga('send', 'pageview');

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
