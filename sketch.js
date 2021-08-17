var astronaut,astroIMG
var background1,backIMG

function preload(){
  astroIMG = loadAnimation("move.png","move1.png");
  backIMG = loadImage("iss.png");
}

function setup() {
  createCanvas(800,600);

  background1 = createSprite(400,300,800,600,);
  background1.addImage(backIMG);
  background1.scale = 0.2;

  astronaut = createSprite(400, 200, 50, 50);
  astronaut.addAnimation("astronaut",astroIMG);
  //astronaut.scale = 0.2;

}

function draw() {
  background("red");
  drawSprites();
}