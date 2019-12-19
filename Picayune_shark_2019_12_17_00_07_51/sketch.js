//random t no funciona, la idea era que cada que entrara fuera con alguno de esos tresc colores pero solo me toma uno
let m = 60;

let g = (255, 204, 0);
let b = (50, 55, 100)
let r = (255, 50, 20);
t = [g, b, r];

function setup() {
  createCanvas(600, 500);
  strokeWeight(0.1);
  stroke(t);
  noLoop();
  p = random(t);

}

function draw() {

  background(210);

  for (i = 0; i < 10000; i++) {

    push();
    let X = random(m, width - m);
    let Y = random(m, height - m);

    translate(X, Y);
    rotate(random(TWO_PI));
    line(-20, 0, 20, 0);
    pop();
  }
}