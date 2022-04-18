const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,bodies

function setup() {
  createCanvas(800,400);
 engine=Engine.create()
 world=engine.world;
 var ground_option={
   isStatic:true

 }
 var ball_option={
 restitution:2

}
 ground=Bodies.rectangle(400,390,800,20,ground_option)
 World.add (world,ground)
 ball=Bodies.circle(100,100,20,ball_option)
 
 World.add (world,ball)
 console.log(ground.isStatic)
}

function draw() {
  background(0);  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}