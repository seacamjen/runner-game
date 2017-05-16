var stage;
var character;
var bitmap;
var hero;

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

  // startGame();
  createjs.Ticker.setFPS(80);
  createjs.Ticker.addEventListener("tick", tick);
  stage.addEventListener("click", fly);

}

function tick() {
  // console.log("Tick");
  // console.log(bitmap.x);
  bitmap.x += 1;
  stage.update();
  if (bitmap.x > 800) {
    bitmap.x = 0
    bitmap.y = 250;
  }
}

function fly(event) {
  bitmap.y += -17;
  stage.update();
}

// function startGame() {
//   hero = new Hero(character);
//   stage.addChild(hero);
//   hero.reset();
//
//   createjs.Ticker.setFPS(30);
//   createjs.Ticker.addEventListener("tick", stage);
// }
//
// function tick() {
//   hero.tick();
//   console.log(hero.tick());
//   stage.update();
// }
