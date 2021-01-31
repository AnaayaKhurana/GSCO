function setup() {
  createCanvas(1600,400);
 car =  createSprite(30, 200, 50, 50);
  wall = createSprite(1200, 200, 60, 100);
car.shapeColor = "red";
wall.shapeColor = "lightpink";
speed = random(55, 90);
weight = random(400, 1500);
car.velocityX = speed;
}

function draw() {
  background(255,255,255);  

  if(isTouching(car, wall)){
  wall.shapeColor = "red";
  car.shapeColor = "red";
  }
  else {(wall.shapeColor = "green", car.shapeColor = "green" )
 }
  if(wall.x-car.x<car.width/2+wall.width/2){
  car.velocityX = 0;
  deformation=0.5 * weight * speed* speed/22509;
  if(deformation>180){
    car.shapeColor = "red";
  }
  if(deformation>100 && deformation<=180){
  car.shapeColor = "orange";
  }
  if(deformation<=100){
    car.shapeColor = "yellow";
  }
  }

  drawSprites();
}
function isTouching(car, wall){
  if (car.x - wall.x < wall.width/2 + car.width/2 && wall.x - car.x < wall.width/2 +car.width/2 && car.y - wall.y < wall.height/2 + car.height/2 && wall.y - car.y < wall.height/2 + car.height/2)
   { return true } 
   else { return false }
}