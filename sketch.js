var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
}

function draw() 
{
  background(30);
  
if(KeyDown(RIGHT_ARROW)){
box.x = box.x +5
}
drawSprites();
}




