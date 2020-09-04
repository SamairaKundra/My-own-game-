var bg;
var form;
var rules;
var droneLogo;
var droneLogo_img;

function preload(){
  bg = loadImage("images/droneBg.jpg");
  rulesBg = loadImage("images/rulesBg.jpg");
 //droneLogo_img = loadImage("images/droneLogo.png");
}

function setup(){
createCanvas(displayWidth-20,displayHeight-30)
form = new Form();
}

function draw (){
form.display();
}