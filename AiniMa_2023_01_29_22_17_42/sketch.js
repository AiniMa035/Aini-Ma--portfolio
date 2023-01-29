let canvas;
let button;

let food = 0;
let feeding = false;

let hungry = 0;
let full = 5;
let tamaState = hungry;

let tamaX;
let tamaY;
let tamaDiam;

function setup() {

  canvas = createCanvas(500, 500);
  canvas.parent("sketch-container"); 

  
  
  tamaX = width/2;
  tamaY = height/2;
  tamaDiam = width/2;

  addGUI();
}

function draw() {
  background(252,246,189);
  
  //Drawing
  noStroke();
  

square(31, 20, 85, 90);
   //右眼
  square(390, 20, 85, 90);
  
   fill(255);
square(30, 20, 65, 90);
   
  square(390, 20, 65, 90);
 
  
  
  if(tamaState == hungry){
    fill(255);

    //manage switching to full state
    if(tamaDiam > width/1){
      tamaState = full;
    }

  }else if(tamaState == full){
    //full color
    fill(239,35,60);//红色

    
    if(tamaDiam > width/4){
      if(frameCount % 3 == 0) tamaDiam--; 
    }else{
      tamaState = hungry;
    }
  }

  //draw Tama and closed mouth
  circle(tamaX,tamaY,tamaDiam);
  fill(30,135,140);
  let mouthOffset = tamaDiam/2;
  rect(tamaX-mouthOffset/2,tamaY,mouthOffset,6);


  if(food > 0 ){

    
    if(frameCount % 40 < 15 && tamaState == hungry){
      eatFood();
    }

   
    
    fill(150);
    circle(tamaX,tamaY+food,food);

  }else if(feeding){
    //manage button state, only do this once IF the button is inactive
    feeding = false;
    button.html("FEED FOOD");
    button.removeClass("inactive");
  }
  

}

function eatFood(){

  //draw open mouth
  fill(10);
  circle(tamaX,tamaY,tamaDiam/2);

  //reduce food & grow Tama
  food --;
  tamaDiam++;

}

function addGUI()
{


  
  //新加的1
   button = createButton("CLEAN");
button.addClass("button");
  
//新加的2
     button = createButton("PLAY");
button.addClass("button");
  
    //add a button
  button = createButton("FEED");

  button.addClass("button");
  
  //Add the play button to the parent gui HTML element
  button.parent("gui-container");
  
  //Adding a mouse pressed event listener to the button 
  button.mousePressed(handleButtonPress); 

}

function handleButtonPress()
{
    if(!feeding){
      
      food = random(60,60);
      feeding = true;

      //manage button state
      button.html("FEEDING");
      button.addClass("inactive");
      
      
    }
    
}

