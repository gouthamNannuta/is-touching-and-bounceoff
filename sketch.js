var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(10, 200, 80, 50);
  movingRect.shapeColor="green";
  movingRect.velocityX=4;

  fixedRect = createSprite(400, 200, 100, 50);
  fixedRect.shapeColor="red";
  fixedRect.velocityX=-4;
}

function draw() {
  background(255,255,255); 
  // Code for bounce

  if(movingRect.x - fixedRect.x <= (movingRect.width + fixedRect.width)/2  
     && fixedRect.x - movingRect.x <= (movingRect.width + fixedRect.width)/2){

      fixedRect.velocityX = -1 * fixedRect.velocityX;
      movingRect.velocityX = -1 * movingRect.velocityX;
     }



  // Code for isTouching
  // movingRect.y=World.mouseY;
  // movingRect.x=World.mouseX;  

  // if(movingRect.x - fixedRect.x <= (movingRect.width + fixedRect.width)/2  
  //   && fixedRect.x - movingRect.x <= (movingRect.width + fixedRect.width)/2
  //   && movingRect.y  - fixedRect.y <= (movingRect.height + fixedRect.height)/2
  //   && fixedRect.y  - movingRect.y <= (movingRect.height + fixedRect.height)/2){
  //   fixedRect.shapeColor="yellow";
  //   movingRect.shapeColor="blue";
  // }else{
  //   movingRect.shapeColor="green";
  //   fixedRect.shapeColor="red";
  // }
  drawSprites();
}