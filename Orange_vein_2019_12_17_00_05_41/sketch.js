function setup() {
  createCanvas(600, 600);
  noCursor();
}

function draw() {
  
  background(0);
  
  stroke(255)
  
  fill(182, 41, 40)
  rect(200, 200 , 200 , 200, 60);
   
 stroke (50, 50, 0)
  line(mouseX, 0, mouseX, 600);
  line(0, mouseY, 600, mouseY);
  
  
  strokeWeight(10);
  stroke (255)
beginShape(POINTS);
vertex(400, 200);
vertex(400, 400);
vertex(200, 400);
vertex(200, 200);
endShape();
  

}