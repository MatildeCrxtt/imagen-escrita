function setup() {
  createCanvas(800, 800);
  background(220);
  background(0);
  blendMode(ADD);
}

function draw() {
}

function forma(colordeFondo) {
  push(); {
    noStroke();
    fill(colordeFondo);
    beginShape();
    translate(mouseX, mouseY);
    rotate(random(TWO_PI));
    let sc = random(0.01, 0.8);
    scale(sc, sc);
    curveVertex(-101, -126);
    curveVertex(-71, -135);
    curveVertex(-37, -114);
    curveVertex(-35, -74);
    curveVertex(-57, -38);
    curveVertex(-105, -41);
    curveVertex(-151, -55);
    curveVertex(-189, -37);
    curveVertex(-196, 14);
    curveVertex(-170, 47);
    curveVertex(-130, 61);
    curveVertex(-101, 74);
    curveVertex(-96, 97);
    curveVertex(-104, 117);
    curveVertex(-73, 129);
    curveVertex(-36, 124);
    curveVertex(-23, 139);
    curveVertex(-45, 154);
    curveVertex(-69, 157);
    curveVertex(-80, 183);
    curveVertex(-56, 217);
    curveVertex(-11, 232);
    curveVertex(41, 224);
    curveVertex(69, 202);
    curveVertex(93, 173);
    curveVertex(99, 148);
    curveVertex(79, 141);
    curveVertex(59, 153);
    curveVertex(27, 153);
    curveVertex(38, 124);
    curveVertex(65, 123);
    curveVertex(89, 131);
    curveVertex(110, 117);
    curveVertex(120, 77);
    curveVertex(135, 28);
    curveVertex(166, -13);
    curveVertex(159, -61);
    curveVertex(113, -46);
    curveVertex(85, -36);
    curveVertex(49, -18);
    curveVertex(15, -37);
    curveVertex(-1, -76);
    curveVertex(8, -120);
    curveVertex(40, -150);
    curveVertex(81, -139);
    curveVertex(116, -129);
    curveVertex(141, -142);
    curveVertex(148, -203);
    curveVertex(106, -235);
    curveVertex(32, -263);
    curveVertex(-71, -262);
    curveVertex(-116, -231);
    curveVertex(-133, -213);
    endShape(CLOSE);
  }
  pop();
}

function mousePressed() {
  let c = color(random(255), random(255), random(255), random(100, 200));
  forma(c);

  /*
  let xcoord = mouseX - width / 2;
  let ycoord = mouseY - height / 2;
  console.log("vertex(" + xcoord + ", " +  ycoord + ");");
  */
}