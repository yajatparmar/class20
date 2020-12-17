var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(400, 200, 50, 50);
 movingRect =createSprite(100, 100, 70, 50);
 fixedRect.shapeColor = "green";
 movingRect.shapeColor = "green";
 
}

function draw() {
  background(255,255,255);  
  console.log("moving : "+movingRect.y);
  console.log("fixed : "+fixedRect.y)
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if((Math.abs(movingRect.x - fixedRect.x)<60)
  &&(Math.abs(movingRect.y-fixedRect.y)<50))
  {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";      
  }
  else
  {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
 
  }
  drawSprites();
}