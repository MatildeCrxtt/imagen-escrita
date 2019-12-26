//sol lewitt cuadrado relleno de lineas horizontales con un triangulo equilatero al cento con la base hacia arriba relleno de lineas verticales http://willcwillc.blogspot.com/2011/04/i-went-into-mountains-of-massachusetts.html

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);
  strokeWeight(4);
  stroke(51);
  
  let Xelement = 44
  //let A = line(400, 5, 0, 5); // número de elementos en X´
  let spacing = 10;
  let m = 20; // margen
  let len = 400;
   //let len2 = 400

  //for (let A = 44 ; x > 400; x += spacing) {
    
  line(400 , 5, 0, 5)
  //line(x, y, x, y + len);

  // calculo los espaciadores de x 
  //let spx = (width - 2 * m) / (numX - 1);

  triangle(200, 280, 100, 115, 282, 115);



}