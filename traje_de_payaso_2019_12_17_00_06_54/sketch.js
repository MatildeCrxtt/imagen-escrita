var randomColor;
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  noStroke();
  
  let numX = 25;
  let numY = 25;
  
  let m = 20;
  
  let spx = (width - 2 * m) / (numX - 1);
  let spy = (height - 2 * m) / (numY - 1);
  
  for (let y = 0; y < numY; y++) {
    for (let x = 0; x < numX; x++) {

      
       let d = dist(mouseX * 2, mouseY * 2, m + x * spx, m + y * spy);

      let r = map(d, 0, width, 0, TWO_PI);
      
      translate(m + x * spx, m + y * spy);
      rotate(r);

      
      randomColor = color(random(255), random(255), random(255));
      
      fill(randomColor)
      circle (200, 200, 30)
      
}
       }
}