// initialize and asign name
let rattail;
let clickCount = 0;
let sceneNum = 0;
let creds;
let title1;
let story_1;
let story_2;
let currentIndex = 0;
let bubbles1;
let flashlight;
let background_color = 0;
let comb;
let changeDirection = false;
let next_level = false;
let bg1;
let shower_audio;
let shower_img;
let shower_2;
let showerhead;
let partinstruct;
let partimg;
let picture9;
let picutre10;
let picture11;
let picutre12;
let scene1_counter = 2;
let title_img;
let lights_off_instruct;
let titles;
let stories;


function setup() {
  createCanvas(600, 400);
  bg1 = createAudio("r&b_loop.wav");
  bg1.loop();
  shower_audio = createAudio("shower_audio.mp3");
  shower_audio.loop();
  creds = new credits();
  bubbles1 = new Bubbles();
  flashlight = new Flashlight();
  comb = new Comb();
  titles = new title();
  storys = new story();
  shower_img = loadImage("shower.png");
  shower_2 = loadImage("shower_2.png");
  showerhead = loadImage("showerhead.png")
  partinstruct = loadImage('partinstruct.png')
  partimg = loadImage('parting.png')
  picture9 = loadImage('picture9.png')
  picture10 = loadImage('picture10.png')
  picture11 = loadImage('picture11.png')
  picture12 = loadImage('picture12.png')
  title_alt = loadImage('eyes_closed.png')
  rattail = loadImage('rattail');
  combimg = loadImage('combimage.png');
  lights_off_instruct = loadImage('lights_off_instruct.png')
}



function draw() {
  background(background_color);

  switch (sceneNum) {
    case 0:
      scene0();
      break;
    case 1:
      scene1();
      break;
    case 2:
      scene2();
      break;
    case 3:
      scene3();
      break;
    case 4:
      scene4();
      break;
    case 5:
      scene5();
      break;
    case 6:
      scene6();
      break;
    case 7:
      scene7();
      break;
    case 8:
      scene8();
      break
      case 9:
      scene9();
      break
      case 10:
      scene10();
      break
      case 11:
      scene11();
      break
      case 12:
      scene12();
      break
      case 13:
      scene13();
      break
  }
}



function mouseClicked() {
  if (sceneNum === 0 || sceneNum === 2 || sceneNum == 1 || sceneNum == 3 || sceneNum == 10 || sceneNum == 11 || sceneNum == 12 ) {
    sceneNum++;
  } else if (sceneNum == 13) {

    resetGame();
    sceneNum = 0;
  } else if (sceneNum == 8 || sceneNum == 5 ) {
    clickCount++;
    if (clickCount === 2) {
      sceneNum++;
      clickCount = 0; 
    }
  }
}

function resetGame() {
  clickCount = 0;
  scene1_counter = 2;
  createBubbles();
}

function createBubbles() {
  bubbles1 = new Bubbles();
}
  
//credits
function scene0() {
  console.log("scene 0: credits screen, click enter to continue");
  creds.body();
  bg1.volume(1)
  shower_audio.volume(0);
}

//title scene
function scene1() {
  console.log("scene 1: title screen, click enter to continue");
  titles.body();
  bg1.volume(1)
  shower_audio.volume(0);


}


function scene2() {
  console.log("scene 2: story background, click enter to continue");
  
    storys.body();
}

function scene3() {
 console.log("shower instructions");
  image(shower_img, 300, 200, width, height)
}

function scene4() {
  console.log(
    "scene 3: simulating washing bubbles out while washing hair. click on bubbles to pop"
  );
  image(shower_2, 300, 200, width, height)
  bubbles1.body();
  if (bubbles1.bubbles.length <= 100) {
    // Move to the next scene
    sceneNum++;
  }
  noCursor()
  image(showerhead,mouseX,mouseY)
  showerhead.resize(80, 100);
  bg1.volume(0.5)
  shower_audio.volume(1); 
}

function scene5() {
image(lights_off_instruct, 300, 200, width, height)
}

function scene6() {
  console.log(
    "scene 4: lights turned off! look for the light switch, a grey square, and click it"
  );
  flashlight.body();
  
  fill(0,248,0)
  let rectX = 505;
  let rectY = 223;
  let rectWidth = 10;
  let rectHeight = 10;

  fill(background_color);
  noStroke();
  //lightswitch
  rect(rectX, rectY, rectWidth, rectHeight);

  if (
    mouseX >= rectX &&
    mouseX <= rectX + rectWidth &&
    mouseY >= rectY &&
    mouseY <= rectY + rectHeight
  ) {
    if (mouseIsPressed) {
      sceneNum++;
      if (sceneNum > 7) {
        sceneNum = 0;
      }
    }
  }
  cursor()
  bg1.volume(0.5)
  shower_audio.volume(0.1);
}

function scene7() {
  console.log("scene 5: finish popping the bubbles");
  image(shower_2, 300, 200, width, height)
  bubbles1.body();
  if (bubbles1.bubbles.length === 0) {
    // Move to the next scene
    sceneNum++;
  }
  noCursor()
  image(showerhead,mouseX,mouseY)
  showerhead.resize(80, 100);
}

function scene8(){
 console.log('hair parting instructions')
  image(partinstruct, 300, 200, width, height)
  
  bg1.volume(1);
  shower_audio.volume(0);
  cursor()
}

function scene9(){
   console.log(
    "scene 6: time to part the hair, click space for when you want to part"
  );
  image(partimg, 300, 200, width, height)
  comb.body();
  // Check if the square overlaps with the tiny square
  let squareLeft = comb.x;
  let squareRight = comb.x + comb.w;
  let squareTop = comb.y;
  let squareBottom = comb.y + comb.h;

  let tinySquareLeft = comb.partX;
  let tinySquareRight = comb.partX + 10;
  let tinySquareTop = comb.partY-20;
  let tinySquareBottom = comb.partY + 10;

  if (
    squareRight >= tinySquareLeft &&
    squareLeft <= tinySquareRight &&
    squareBottom >= tinySquareTop &&
    squareTop <= tinySquareBottom
  ) {
    sceneNum++;
  }
  bg1.volume(1)
  shower_audio.volume(0);
  cursor()
}

function scene10(){
   console.log("scene 9: ");
  bg1.volume(1)
  shower_audio.volume(0);
  image(picture9, 300, 200, width, height)
  cursor()
}
  
function scene11(){
 console.log("scene 10:");
  bg1.volume(1)
  shower_audio.volume(0);
  image(picture10, 300, 200, width, height)
  cursor()
}

function scene12(){
   console.log(
    "scene 11: "
  );
  image(picture11, 300, 200, width, height)
  bg1.volume(1)
  shower_audio.volume(0);
  cursor()
}

  function scene13(){
     console.log(
    "scene 12: "
  );
  image(picture12, 300, 200, width, height)
  bg1.volume(1)
  shower_audio.volume(0);
  cursor()
  }
class credits {
  constructor() {
    this.x = 300;
    this.y = 200;
    this.sizew = width;
    this.sizeh = height;
    this.img = loadImage("credits.png");
  }

  body() {
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.sizew, this.sizeh);
  }
}



class Bubbles {
  constructor() {
    this.bubbles = [];

    // Create bubbles
    for (let i = 0; i < 200; i++) {
      let x = random(0, 400);
      let y = random(0, 400);
      let r = random(20, 100);
      let b = new Bubble(x, y, r);
      this.bubbles.push(b);
    }
  }

  body() {
    for (let i = 0; i < this.bubbles.length; i++) {
      this.bubbles[i].body();
    }

    for (let i = this.bubbles.length - 1; i >= 0; i--) {
      if (this.bubbles[i].clickedOn(mouseX, mouseY)) {
        this.bubbles.splice(i, 1);
      }
    }
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.radius = r;
    this.brightness = 0;
  }

  clickedOn(mx, my) {
    let d = dist(mx, my, this.x, this.y);
    if (d < this.radius && mouseIsPressed) {
      return true;
    } else {
      return false;
    }
  }

  changeColor() {
    this.brightness = 255;
  }

  changeBack() {
    this.brightness = 0;
  }

  body() {
   // colorMode(HSB)
    stroke(0,245,223);
    strokeWeight(4)
    fill(189, 255, 249);
    ellipse(this.x, this.y, this.radius);
  }
}

class Flashlight {
    constructor() {
    this.img = loadImage('light_switch.png');
    this.flashlightDiameter = 100;
  }

  body() {
    let sx = mouseX - this.flashlightDiameter / 2;
    let sy = mouseY - this.flashlightDiameter / 2;
    let sWidth = this.flashlightDiameter;
    let sHeight = this.flashlightDiameter;

    let dx = mouseX - sWidth / 2;
    let dy = mouseY - sHeight / 2;

    copy(this.img, sx, sy, sWidth, sHeight, dx, dy, sWidth, sHeight);
  }
}

class Comb {
  constructor() {
    this.originalX = 100;
    this.originalY = 200;
    this.x = this.originalX;
    this.y = this.originalY;
    this.w = 100;
    this.h = 100;
    this.partX = 513;
    this.partY = 259;
    this.img = loadImage('combimage.png');
  }
  body() {
    image(this.img,this.x, this.y, this.w, this.h);
    colorMode(RGB)
    fill(0,258,0)
    
    if (this.y > height - 20) {
      changeDirection = true;
    } else if (this.y <= 20) {
      changeDirection = false;
    }

    if (changeDirection === false && this.x == this.originalX) {
      this.y = this.y + 10;
    } else if (changeDirection == true && this.x == this.originalX) {
      this.y = this.y - 10;
    }

    if (this.x <= width - (this.w + 10) && keyIsPressed) {
      this.x = this.x + 10;
    }

    if (keyIsPressed === false) {
      this.x = this.originalX;
    }
  }
}
  class title {
    constructor(){
    this.x = 300;
    this.y = 200;
    this.sizew = width;
    this.sizeh = height;
    this.img1 = loadImage("title.png");
    this.img2 = loadImage("eyes_closed.png");
    }
    body(){
          if (scene1_counter >= 0 && scene1_counter < 40) {
    image(this.img1, this.x, this.y, this.sizew, this.sizeh);
    scene1_counter++; 
    console.log('Eyes open')
  } else if (scene1_counter >= 40 && scene1_counter < 80) {
    
    image(this.img2, this.x, this.y, this.sizew, this.sizeh);
    scene1_counter++; 
    
    console.log('Eyes closing');
  } else {
    image(this.img1, this.x, this.y, this.sizew, this.sizeh);
    scene1_counter = 0;
    console.log('Eyes back to open');
  }
    }
  }
  
  class story {
    constructor(){
    this.x = 300;
    this.y = 200;
    this.sizew = width;
    this.sizeh = height;
    this.img1 = loadImage('story_1.png');
    this.img2 = loadImage('story_2.png')
    }
    body(){
          if (scene1_counter >= 0 && scene1_counter < 40) {
    image(this.img1, this.x, this.y, this.sizew, this.sizeh);
    scene1_counter++; 

  } else if (scene1_counter >= 40 && scene1_counter < 80) {
    
    image(this.img2, this.x, this.y, this.sizew, this.sizeh);
    scene1_counter++; 
    
 
  } else {
    image(this.img1, this.x, this.y, this.sizew, this.sizeh);
    scene1_counter = 0;

  }
    }
  }



