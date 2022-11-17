function setup() {
  createCanvas(400, 400);
}
let xbol=200;
let ybol=200;
let diametro=50;
let velocidadeX=1;
function draw() {
  background(0);
  circle(xbol, ybol, diametro);
  xbol +=velocidadeX;
  if (xbol+diametro/2>=400) {
  velocidadeX*=-1;
  }
  if (xbol-diametro/2<=0){
  velocidadeX*=-1
}
  rect (0,150,25,100)
 }
