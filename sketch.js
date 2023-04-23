alert("Imagine touching Grasses virtually");

var count;


function preload(){
  GrassAnim = loadImage("grass.jpg");
  touchsound = loadSound("touched.mp3")
}

function setup(){
createCanvas(windowWidth,windowHeight);
count =0;


}



function draw() {
  background(GrassAnim);






  

  drawSprites();
 
  
  if(touches.length > 0 ||  mouseWentDown("leftButton")) {
    count++;
    touchsound.play();
     touches = [];
  }
   
 
 

   textSize(50);
   strokeWeight(2)
   stroke("black");
   fill("white");
   textAlign(CENTER)
  
   text("Grass Touched: "+count+" times",width/2+50,100);
   

}
