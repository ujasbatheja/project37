var gameState = 0;
var dog, dogImage;
var food, foodImage;
var database, position;
var foodStock, lastFed;

function preload(){     
  dogImage = loadImage("images/dogimg1.png");
  foodImag = loadImage("images/Milk.png");
}

function setup() {
  createCanvas(500,500);
  dog = createSprite(250,250,5,5);
  dog.scale = 0.3;
  database = firebase.database();

  foodObj = new Food();
  
  foodStock=database.ref("food");

}


function draw() {  
  background(46,139,87);
  
   dog.addImage("dogImage",dogImage);

   food.display();
   milk.display();
  
  drawSprites();
}
