var fixedRect, movingRect, rect7, rect8;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  rect7=createSprite(800,400,30,40);
  rect7.velocityX=-4;
  rect8=createSprite(400,400,40,30);
  rect8.velocityX=+4;
}

function draw() {
  background(0,0,0);  

  bounceOff (movingRect, fixedRect);
  bounceOff (rect7, rect8);
  drawSprites();
}




