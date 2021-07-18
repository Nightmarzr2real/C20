var moveingrect, fixedrect



function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(200, 200, 50, 50);
  fixedrect.shapeColor = ("yellow")
  moveingrect = createSprite(200, 200, 80, 40)
  moveingrect.shapeColor = ("yellow")
}

function draw() {
  background(255,255,255); 
  moveingrect.y = mouseY
  moveingrect.x = mouseX 
  if(moveingrect.x - fixedrect.x<fixedrect.width/2+moveingrect.width/2&&
   fixedrect.x - moveingrect.x<fixedrect.width/2+moveingrect.width/2&&
   moveingrect.y - fixedrect.y<fixedrect.height/2+moveingrect.height/2&&
   fixedrect.y - moveingrect.y<fixedrect.height/2+moveingrect.height/2){
    moveingrect.shapeColor = ("blue")
    fixedrect.shapeColor = ("blue")
    
  }
  else{
    moveingrect.shapeColor = ("yellow")
    fixedrect.shapeColor = ("yellow")
  }
  drawSprites()
}