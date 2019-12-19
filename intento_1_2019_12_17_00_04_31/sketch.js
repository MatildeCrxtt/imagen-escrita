function setup() {
  createCanvas(400, 400);
  
  
}

function draw() {
  
 background (150, 0, 0)
  
  
  circle(100, 50, 100, 50);
  fill(100, 200, 100)
  
  
  speed = sin(millis()/100) * 10
  
  circle (100 + speed, 200, 25, 100)
  
  line (250, 200, 100, 300)
  stroke(0)
  
  
} 

