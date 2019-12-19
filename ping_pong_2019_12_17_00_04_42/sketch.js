function setup() {
  createCanvas(400, 400);
}

function draw() {
  background (0);
  
  speed = sin(millis()/180) * 20
   
  fill ( 250)
  
  circle (300, speed + 60, 50, 100)
  circle (300, speed + 120, speed + 50, 100)
  circle (300, speed + 180, 50, 100)
  circle (300, 240, speed + 50, 100)
  circle (300, speed + 300, 50, 100)
  
  
  circle (200, speed + 60, 50, 100)
  circle (200, speed + 120, speed + 50, 100)
  circle (200, speed + 180, 50, 100)
  circle (200, 240, speed + 50, 100)
  circle (200, speed + 300, 50, 100)
 
  
  
  circle (100, speed + 60, 50, 100)
  circle (100, speed + 120, speed +  50, 100)
  circle (100, speed + 180, 50, 100)
  circle (100, 240, speed + 50, 100)
  circle (100, speed + 300, 50, 100)
  
  
  speed = sin(millis()/200) * 20
  
  fill (0, 60, 0)
  
  circle (100, speed + 120, speed +  50, 100)
  circle (200, speed + 120, speed + 50, 100)
  circle (300, speed + 120, speed + 50, 100)
  
  circle (100, speed + 240, speed +  50, 100)
  circle (200, speed + 240, speed + 50, 100)
  circle (300, speed + 240, speed + 50, 100)
  
  
  circle (speed + 300, speed + 60, 50, 100)
  circle (speed + 300, speed + 180, 50, 100)
  circle (speed + 300, speed + 300, 50, 100)
  
  circle (speed + 200, speed + 60, 50, 100)
  circle (speed + 200, speed + 180, 50, 100)
  circle (speed + 200, speed + 300, 50, 100)
 
  circle (speed + 100, speed + 60, 50, 100)
  circle (speed + 100, speed + 180, 50, 100)
  circle (speed + 100, speed + 300, 50, 100)
  
  

   

}
