function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
}


function mousePressed(){
stamp(mouseX,mouseY);
}

function stamp(x,y) {
  cirle( 50, 50, 20);
}