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


function isTouching(car, wall){
    if (car.x - wall.x < wall.width/2 + car.width/2 && wall.x - car.x < wall.width/2 +car.width/2 && car.y - wall.y < wall.height/2 + car.height/2 && wall.y - car.y < wall.height/2 + car.height/2)
     { return true } 
     else { return false }
  }
