/* 
   
   Quiero que c varie los colores de los circulos
*/

let SliderN, n; //diametro
let SliderC, c; //color
let value = 0;

function setup() {
  createCanvas(400, 400);
  SliderN = createSlider(1, 140, 10, 10);
  SliderC = createSlider(1, 50, 10, 10);
  
  //colorMode(RGB, 100);

}

function draw() {
  background(value);
  noStroke();
    
  
  n = SliderN.value();
  c = SliderN.value();
  
  
  fill(200, 0, 0, 50)
  circle (200, 200, n+ 20)
  circle (200, 200, n- 30)
  circle (200, 200, n+ 40)
  circle (200, 200, n- 50)
  
  
  fill(0, 220, 0, 50)
  circle (200, 200, n+ 60)
  circle (200, 200, n- 70)
  circle (200, 200, n+ 80)
  circle (200, 200, n- 90)
  
   
  fill(0, 0, 150, 50)
  circle (200, 200, n+ 100)
  circle (200, 200, n- 110)
  circle (200, 200, n+ 120)
  circle (200, 200, n- 130)
  
  
   }
function mouseMoved() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}  

