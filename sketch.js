 //namespacing for Matter.Engine,World,Bodies,Constraint
 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;

 //creating variables
 var engine, world;
 var canvas;
 var palyer, playerBase;
 var computer, computerBase;
 var arrow;


 function setup() 
 {
    //creating a canvas
    canvas = createCanvas(windowWidth, windowHeight);

    //creating the engine
    engine = Engine.create();
    world = engine.world;

    //adding the playerBase to the PlayerBase class
    playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
    //adding player to the Player class
    player = new Player(285, playerBase.body.position.y - 153, 50, 180);
    //adding the playerarcher to the Playerarcher class
    playerArcher = new PlayerArcher(
    340,
    playerBase.body.position.y - 180,
    120,
    120
    );

    //adding the computerBase to the computerBase class
    computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
    );
    //adding computer to the computerclass
    computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
   );
   //adding the computerarcher to the computerarcher class
    computerArcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
    );
  
    //adding the arrow to the arrow class
    arrow = new PlayerArrow(playerArcher.body.position.x, playerArcher.body.position.y, 100, 10);
  
 }

 function draw() 
 {
  //setting the background
   background(180);

   Engine.update(engine);

    // Title
    fill("#FFFF");
    textAlign("center");
    textSize(40);
    text("EPIC ARCHERY", width / 2, 100);

    //displaying the player
    playerBase.display();
    player.display();
    //displaying the computer 
    computerBase.display();
    computer.display();
    //displaying the archers
    playerArcher.display();
    computerArcher.display()
  
    if(keyCode === 32)
    {
      //displaying the arrow
      arrow.display();
      arrow.shoot(playerArcher.body.angle);
    }
}



