const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myWorld , myEngine , box




function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  var features = {
    isStatic : true
  
  }
  box = Bodies.rectangle (200,200,60,60,features)
  World.add(myWorld,box)
  console.log(box)
 



}

function draw() {
  background("black"); 
  Engine.update(myEngine)
 rectMode(CENTER)
 rect(box.position.x,box.position.y,50,50)




   
}


