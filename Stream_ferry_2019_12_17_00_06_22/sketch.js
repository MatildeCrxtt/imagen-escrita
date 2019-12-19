let SliderA, a;
let SliderB, b;



function setup() {
  createCanvas(400, 400);
  SliderA = createSlider(1, 200, 50, 1)
  SliderB = createSlider(20, 200, 50, 7)
 
}

function draw() {
  background(0);
  
  a = SliderA.value();
  b = SliderB.value();
 
  stroke (20, 230, 30)
  point(a+ 10, b+ 5);
  point(b+ 15, a+ 10);
  point(a+ 20, b+ 20);
  point(b+ 25, a+ 30);
  point(a+ 30, b+ 40);
  point(b+ 35, a+ 50);
  point(a+ 40, b+ 60);
  point(b+ 45, a+ 70);
  point(a+ 50, b+ 80);
}