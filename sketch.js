var wall, thickness;
var bullet,speed,weight;

function setup(){
  createCanvas(500,500);
  thickness = Math.round(random(20,90));
  speed = Math.round(random(50,300));
  weight = Math.round(random(10,90));

  wall = createSprite(470,250,thickness,400);
  bullet = createSprite(50,250,20,20);
  bullet.velocityX = speed;
}
function draw(){
  background("white");
if (collide(bullet,wall)){
  bullet.velocityX=0;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  if (damage>10){
    wall.shapeColor = "green";
  }
  if (damage<10){
    wall.shapeColor = "red";
  }else{
    wall.shapeColor ="green";
  }
}
drawSprites();
}