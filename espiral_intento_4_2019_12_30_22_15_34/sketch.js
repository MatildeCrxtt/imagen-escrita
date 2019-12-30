let x, y;
let r = 0;
let h = 0.2;
let a = 0.1;

function setup() {
  createCanvas(600, 600);
  noFill();
  background(100);
}

function draw() {



  beginShape();
  for (let t = 0; t < TWO_PI * 1 + a; t += a) {
    x = width / 2 + cos(t) * r;
    y = height / 2 + sin(t) * r;
    vertex(x, y);
    r += h;
  }
  endShape();
  if (r > width / 2) {
    r = 0;
  }
  fill(100, 100);
  noStroke();
  rect(0, 0, width, height);
  noFill();
  stroke(0);
}