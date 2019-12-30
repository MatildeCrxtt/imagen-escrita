/*cómo regulo la velocidad con la gira? y que las pelotitas cambien de color segun el cuarto de plano en el que esten*/

var r = 100;
var theta = 0;
let c;

function setup() {
  createCanvas(400, 400);
  c = random(100)
}

function draw() {
  background(220);
  push();
  translate(width / 2, height / 2);

  var x = r * cos(theta);
  var y = r * sin(theta);

  fill = c
  
  line(0, 0, x, y);

  ellipse(x, y, 10, 10);

  pop();

  theta += 1;
}