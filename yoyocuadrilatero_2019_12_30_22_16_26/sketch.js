var r = 100;
var theta = 0;
let c;

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(120);
  push();
  translate(width / 2, height / 2);

  c = color(random(255), random(255), random(255));

  var x = r * cos(theta);
  var y = r * sin(theta);

  if (theta > 0 && theta < HALF_PI) {
    fill("red");
  }
  else if(theta > HALF_PI && theta < PI){
    fill("green");
  }
  else if(theta > PI && theta < PI + HALF_PI) {
    fill("cyan");
  }
  else if(theta > PI + HALF_PI && theta < TWO_PI) {
    fill("purple");
  }

  line(0, 0, x, y);

  ellipse(x, y, 12, 12);

  pop();

  theta += 0.01;
  if (theta > TWO_PI) {
    theta = 0;
  }
}