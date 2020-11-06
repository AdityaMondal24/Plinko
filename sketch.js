const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;

var particles = [];
var plinkos1 = [];
var plinkos2 = [];
var plinkos3 = [];
var plinkos4 = [];
var divisions = [];

var divisionHeight = 300;

function setup() 
{
  var canvas = createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,780,480,10);

  for(k=0; k<=480 ; k = k+80)
  {
    divisions.push(new Division(k,625,10,divisionHeight));
  }

  for(k = 10; k<=480; k = k+ 40)
  {
    plinkos1.push(new Plinko(k,75,10));
  }

  for(k = 20; k<=470; k=k+40)
  {
    plinkos2.push(new Plinko(k,175,10));
  }

  for(k = 10; k<=480; k=k+40)
  {
    plinkos3.push(new Plinko(k,275,10));
  }

  for(k = 20; k<=470; k=k+40)
  {
    plinkos4.push(new Plinko(k,375,10));
  }

}

function draw() 
{
  background(0); 
  Engine.update(engine); 
  ground.display();

  for(k = 0; k<divisions.length; k++)
  {
    divisions[k].display();
  }

  for(k = 0; k<plinkos1.length; k++)
  {
    plinkos1[k].display();
  }

  for(k = 0; k<plinkos2.length; k++)
  {
    plinkos2[k].display();
  }

  for(k = 0; k<plinkos3.length; k++)
  {
    plinkos3[k].display();
  }

  for(k = 0; k<plinkos4.length; k++)
  {
    plinkos4[k].display();
  }

  if(frameCount % 60 == 0)
  {
    particles.push(new Particles(random(100,400),20,10));
  }

  for(i=0; i<particles.length; i++)
  {
    particles[i].display();
  }
}