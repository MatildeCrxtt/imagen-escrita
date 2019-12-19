 let a = 0;
 let r = 5;

 function setup() {
   createCanvas(600, 600);
   background(0);
   
   frameRate(30); 
   sliderA = createSlider(0.1, 50, 0.1, 0); 


 function draw() {
   noStroke();
  
   let x = r * cos(a);
   let y = r * sin(a);

   a += sliderA.value();
   r += 0.5 
   
   translate(width / 2, height / 2); 
   fill(r % 255, r % 50, 50 ); 
   triangle(x, 75, 58, y, 86, 75);

  

 }