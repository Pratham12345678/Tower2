const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var platform;

function setup(){
    var canvas = createCanvas(1200,900);
    
    engine = Engine.create();
    world = engine.world;

    ball = new Ball(500, 300, 30, 30);

    box1 = new Box(300, 275, 30, 40);
    box2 = new Box(330, 275, 30, 40);
    box3 = new Box(360, 275, 30, 40);
    box4 = new Box(390, 275, 30, 40);
    box5 = new Box(420, 275, 30, 40);
    box6 = new Box(450, 275, 30, 40);
    box7 = new Box(480, 275, 30, 40);

    box8 = new Box(330, 235, 30, 40);
    box9 = new Box(360, 235, 30, 40);
    box10 = new Box(390, 235, 30, 40);
    box11 = new Box(420, 235, 30, 40);
    box12 = new Box(450, 235, 30, 40);

    platform = new Box(250, 280, 200, 50);

}

function draw(){
    background("black");
    Engine.update(engine);
    

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
   
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
    
function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}


