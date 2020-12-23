const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon_img;

function preload() {

    polygon_img=loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(450,410,1200,20);
    stand1 = new Ground(600,350,300,20);
    stand2 = new Ground(950, 250, 250,20);

    //level one block one
    box1 = new Box(480, 300, 40, 50);
    box2 = new Box(520, 300, 40, 50);
    box3 = new Box(560, 300, 40, 50);
    box4 = new Box(600, 300, 40, 50);
    box5 = new Box(640, 300, 40, 50);
    box6 = new Box(680, 300, 40, 50);
    box7 = new Box(720, 300, 40, 50);
    //level two block one
    box8 = new Box(520, 250, 40, 50);
    box9 = new Box(560, 250, 40, 50);
    box10 = new Box(600, 250, 40, 50);
    box11 = new Box(640, 250, 40, 50);
    box12 = new Box(680, 250, 40, 50);
    //level three block one
    box13 = new Box(560, 200, 40, 50);
    box14 = new Box(600, 200, 40, 50);
    box15 = new Box(640, 200, 40, 50);
    //level four block one
    box16 = new Box(600, 150, 40, 50);

    //level one block two
    box17 = new Box(870, 200, 40, 50);
    box18 = new Box(910, 200, 40, 50);
    box19 = new Box(950, 200, 40, 50);
    box20 = new Box(990, 200, 40, 50);
    box21 = new Box(1030, 200, 40, 50);
    //level two block two
    box22 = new Box(910, 150, 40, 50);
    box23 = new Box(950, 150, 40, 50);
    box24 = new Box(990, 150, 40, 50);
    //level three block two
    box25 = new Box(950, 100, 40, 50);

    polygon = Bodies.circle(50, 200, 20);
    World.add(world, polygon);

    slingshot = new SlingShot(this.polygon, {x: 100, y:200});
}

function draw(){
    background("lightgray");
    Engine.update(engine);

    ground.display();
    stand1.display();
    stand2.display();

    fill("lightblue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    fill("lightpink");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    fill("turquoise");
    box13.display();
    box14.display();
    box15.display();

    fill("gray");
    box16.display();

    fill("gray");
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    fill("pink");
    box22.display();
    box23.display();
    box24.display();

    fill("turquoise");
    box25.display();

    imageMode(CENTER)
    image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);

    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {

    if(keyCode === 32) {
        slingshot.attach(this.polygon);
    }
}