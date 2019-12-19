let SliderN, n;
function setup() {
  createCanvas(600, 600);
  fill(255, 90);
  strokeWeight(.25);
   SliderN = createSlider(1, 400, 10, 10,);
}

function draw() {
  background(220);
   n = SliderN.value();
  
  push()
  let niveles = round(map(mouseX, 0, width, 0, 10));
  //recursiveCircle(width/2, height/2, 100, niveles);
  //recursiveCircle(width/2, height/2, 200, niveles);
  //recursiveCircle(width/2, height/2, 300, niveles);
  //recursiveCircle(width/2, height/2, 400, niveles);
  recursiveCircle(width/2, height/2, 500, niveles);
  pop()
  
}

function recursiveCircle(x, y, diam, levels){
  ellipse(x, y, n+ diam);
  if(levels > 1){
  recursiveCircle(x+diam/4, y/2, diam/2, levels-1);
  recursiveCircle(x/2, y+diam/6, diam/2, levels-1);
    
  recursiveCircle(x+diam/4, y/-2, -diam/2, levels-2);
  recursiveCircle(x/-2, y+diam/6, -diam/2, levels-2);
    
    
  /* quiero que pasen estas recursiones pero en el lado inferior derecho
  recursiveCircle(x+diam/4, y/2, diam/2, levels-1);
  recursiveCircle(x/2, y+diam/6, diam/2, levels-1);
    
  recursiveCircle(x+diam/4, y/-2, -diam/2, levels-2);
  recursiveCircle(x/-2, y+diam/6, -diam/2, levels-2);
  */
    
 
    

  }
}