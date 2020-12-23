
let numFrames = 8;
let images = [];
let img1;
let r;
let g;
let b;
let angle =0;
let angleDirection = 1;
let speed = 0.005;

function preload() {
  img1 = loadImage('whales.png');
  for(let i = 1; i < numFrames; i++){
    images[i] = loadImage( "building/building" + i  + ".png" );
   }

}

function setup(){
  createCanvas(640,350);
  background(0);
 
  frameRate(60);
  
}

function draw(){
  
 let r = mouseX; 
 let g = mouseY;
 let b = mouseX; 
 (235<g);
 (187<b);
 background(225,g,b); // 배경색(하늘) 바꾸기 



  image(images[4],280,5,400,400);  
 
  push(); // 건물의 타임랩스처럼 번지는 이미지 (get과 set 사용해서)
  
  image(images[1],-20,5,350,350);

  let x1 = floor(random(width));
  let y1 = floor(random(height));

  let x2 = round(x1 + random(-70,70)); 
  let y2 = round(y1 + random(-50,70)); 

  let w = 10;
  let h = 400;

  let area = get(x1,y1,w,h); 
  
  set(x2,y2,area); 
  
  pop();
 
  image(images[4],280,5,400,400);  
  image(images[1],-20,5,350,350);
  
   push();

   fill(255,255,255);
   noStroke();
   rotate(angle);
   ellipse(mouseX, mouseY-200, 30 ,30);
   ellipse(mouseX, mouseY+50, 30 ,30 ,80);
   
   angle += speed * angleDirection;
     if((angle > QUARTER_PI) || (angle < 0 )){
     angleDirection *= -1; 
      }
   
      pop();

      for (let n = 0; n < width; n++) {
        let r = random(600);
        let p = random(600)
        strokeWeight(2);
        stroke(random(255),random(255),random(255));
        point(r,p);
      }



if((mouseX > 0) && (mouseX < 200 ) && (mouseY > 100) && (mouseY < 360)){
  image(images[2],-20,5,350,350); 
   }else if ((mouseX > 200 ) && (mouseX < 300) && (mouseY > 0) && (mouseY < 360)){
     image(images[3],-20,5,350,350); 
   }else if ((mouseX > 300 ) && (mouseX < 400) && (mouseY > 0) && (mouseY < 360)){
     image(images[5],280,5,400,400); 
     image(images[3],-20,5,350,350); 
   }else if ((mouseX > 400 ) && (mouseX < 500) && (mouseY > 0) && (mouseY < 360)){
     image(images[5],280,5,400,400);
     image(images[6],280,5,400,400); 
     image(images[1],-20,5,350,350);
   }else if ((mouseX > 400 ) && (mouseX < 500) && (mouseY > 0) && (mouseY < 360)){
     image(images[5],280,5,400,400);
     image(images[6],280,5,400,400); 
     image(images[1],-20,5,350,350);
   }else if ((mouseX > 500 ) && (mouseX < 640) && (mouseY > 0) && (mouseY < 360)){
     
     image(images[7],280,5,400,400); 
     image(images[1],-20,5,350,350);
   } //건물 마우스 위치에 따른 색변화 


image(img1, mouseX-230, mouseY-100, 220, 220);  //고래 
 

image(images[4],random(640),random(360));

}