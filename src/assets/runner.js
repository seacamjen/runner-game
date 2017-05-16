var stage;
var character;
var bitmap;

function init() {
  stage = new createjs.Stage("demoCanvas");

  character = new Image();
  character.src = "assets/catboy.png";
  bitmap = new createjs.Bitmap(character);
  stage.addChild(bitmap);
  stage.update();

  createjs.Tween.get(bitmap, {loop: true})
          .to({x: 300, y: 200}, 1000, createjs.Ease.getPowInOut(2))
          .to({alpha: 0, x: 500, y: 75}, 500, createjs.Ease.getPowInOut(2))
          // .to({alpha: 0, y: 125}, 100)
          // .to({alpha: 1, y: 100}, 500, createjs.Ease.getPowInOut(2))
          // .to({x: 100}, 800, createjs.Ease.getPowInOut(2));

  // startGame();
  createjs.Ticker.setFPS(30);
  createjs.Ticker.addEventListener("tick", stage);
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
