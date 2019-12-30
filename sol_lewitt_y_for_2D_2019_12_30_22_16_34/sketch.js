/*

Star for 2d sol lewitt
A black five-pointed star, a yellow six-pointed star, a red seven-pointed star, and a blue eight-pointed star, drawn in color and India ink washes.
https://massmoca.org/event/walldrawing396/
*/

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);

  /* estrella A 5 puntas negra*/
  push();
  fill(0);
  translate(width * 0.3, height * 0.2);
  /*rotate(frameCount / -100.0);*/
  star(0, 0, 30, 70, 5);
  pop();

  /*estrella B 6 ppuntas amarilla*/
  push();
  fill(255, 204, 0);
  translate(width * 0.7, height * 0.2);
  /*rotate(frameCount / 50.0);*/
  star(0, 0, 40, 70, 6);
  pop();

  /*estrella C 7 puntas roja*/
  push();
  fill(255, 20, 20);
  translate(width * 0.3, height * 0.7);
  /*rotate(frameCount / 200.0);*/
  star(0, 0, 45, 70, 7);
  pop();

  /*estrella D 8 puentas azul*/
  push();
  fill(20, 20, 255);
  translate(width * 0.7, height * 0.7);
  /*rotate(frameCount / 200.0);*/
  star(0, 0, 50, 70, 8);
  pop();

}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}