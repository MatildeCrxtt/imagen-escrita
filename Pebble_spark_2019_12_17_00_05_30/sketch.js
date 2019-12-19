let yPos = 0;
let inc = 2;

function setup() {
  createCanvas(800, 800, WEBGL);

  // setup() runs once
  frameRate(100);
}

function draw() {
  background(204);
  fill(200, 80, 0)

  translate(p5.Vector.fromAngle(millis() / 500, 100));

  // draw() loops forever, until stopped

  yPos += inc;
  if (yPos < 0 || yPos > 200) {
    inc *= -1;
  }
  box(20, yPos + 10, 600);
}