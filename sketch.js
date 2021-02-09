    const Engine=Matter.Engine;
    const World=Matter.World;
    const Bodies=Matter.Bodies;
    const Constraint=Matter.Constraint;

    var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16
    var box17,box18,box19,box20,box21,box22,box23,box24,box25;   
    
    var ground1,ground2,ground3;
    var ball;

function preload(){
    polygonImage=loadImage("polygon.png")

}


function setup(){
    createCanvas(1250,700);
    engine=Engine.create();
    world=engine.world;

     box1 = new Box(380,228,50,60);3
     box2 = new Box(355,228,50,60);
     box3 = new Box(330,228,50,60);
     box4 = new Box(305,228,50,60);
     box5 = new Box(280,228,50,60);
     box6 = new Box(255,228,50,60);
     box7 = new Box(230,228,50,60);
     box8 = new Box(355,198,50,60);
     box9 = new Box(330,198,50,60);
     box10 = new Box(305,198,50,60);
     box11 = new Box(280,198,50,60);
     box12 = new Box(255,198,50,60);
     box13 = new Box(330,168,50,60);
     box14 = new Box(305,168,50,60);
     box15 = new Box(280,168,50,60);
     box16 = new Box(305,138,50,60);

     box17=new Box(520,129,50,60);
     box18=new Box(545,129,50,60);
     box19=new Box(570,129,50,60);
     box20=new Box(495,129,50,60);
     box21=new Box(470,129,50,60);
     box22=new Box(495,99,50,60);
     box23=new Box(520,99,50,60);
     box24=new Box(545,99,50,60);
     box25=new Box(520,69,50,60);
     

     ground1 = new Ground(800,680,1600,25);
     ground2 = new Ground(610,500,380,25);
     ground3= new Ground(1000+35,300,300,25);

     ball=Bodies.circle(50,200,70);
     World.add(world,ball);

     slingShot=new SlingShot(this.ball,{x:100,y:200})


}
function draw(){
    background(0);
    Engine.update(engine);
    fill("pink");
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
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    
   
    ground1.display();
    ground2.display();
    ground3.display();

    fill("gold");
    imageMode(CENTER);
    image(polygonImage,ball.position.x,ball.position.y,70,70);

    slingShot.display();
    
}
function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingShot.fly();
}