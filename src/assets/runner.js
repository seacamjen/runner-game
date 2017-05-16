var stage;
var character;
var bitmap;
var hero;

var KEYCODE_UP = 38;
var KEYCODE_LEFT = 37;
var KEYCODE_RIGHT = 39;
var KEYCODE_DOWN = 40;
var leftArrow = false;
var rightArrow = false;
var upArrow = false;
var downArrow = false;

function init() {
  stage = new createjs.Stage("demoCanvas");

  character = new Image();
  character.src = "assets/catboy.png";
  bitmap = new createjs.Bitmap(character);
  bitmap.x = 0;
  bitmap.y = 250;
  stage.addChild(bitmap);
  stage.update();

  bitmap.x = bitmap.x + 3;
  if (bitmap.x > stage.canvas.width){
    bitmap.x = 0;
  }

  // createjs.Tween.get(bitmap, {loop: true})
  //         .to({x: 300, y: 200}, 1000, createjs.Ease.getPowInOut(2))
  //         .to({alpha: 0, x: 500, y: 75}, 500, createjs.Ease.getPowInOut(2))
          // .to({alpha: 0, y: 125}, 100)
          // .to({alpha: 1, y: 100}, 500, createjs.Ease.getPowInOut(2))
          // .to({x: 100}, 800, createjs.Ease.getPowInOut(2));

  createjs.Ticker.setFPS(80);
  createjs.Ticker.addEventListener("tick", tick);
  // stage.addEventListener("click", fly);
  stage.addEventListener("click", jump);

  window.onkeyup = keyUpHandler;
  window.onkeydown = keyDownHandler;
  console.log(leftArrow);
}

function tick() {
  // bitmap.x += 1;
  move();
  stage.update();
  if (bitmap.x > 800) {
    bitmap.x = 0
    bitmap.y = 250;
  }
}

// function fly(event) {
//   bitmap.y += -17;
//   stage.update();
// }

function jump() {
  createjs.Tween.get(bitmap, {loop: false})
    .to({y: bitmap.y}, 500, createjs.Ease.getPowInOut(3))
    .to({y: bitmap.y -=100}, 1000, createjs.Ease.getPowInOut(3))
    .to({y: bitmap.y +=100}, 1000, createjs.Ease.getPowInOut(3))

}

function keyDownHandler(e) {
  switch(e.keyCode) {
    case KEYCODE_RIGHT: rightArrow = true; break;
    case KEYCODE_LEFT: leftArrow = true; break;
    case KEYCODE_UP: upArrow = true; break;
    case KEYCODE_DOWN: downArrow = true; break;
    console.log(leftArrow);
  }
}

function keyUpHandler(e) {
  switch(e.keyCode) {
    case KEYCODE_RIGHT: rightArrow = false; break;
    case KEYCODE_LEFT: leftArrow = false; break;
    case KEYCODE_UP: upArrow = false; break;
    case KEYCODE_DOWN: downArrow = false; break;

  }
}

function move() {
  if(rightArrow) bitmap.x -= 5;
  if(leftArrow) bitmap.x += 5;
  if(upArrow) bitmap.y -= 5;
  if(downArrow) bitmap.y += 5;
  stage.update();
}
