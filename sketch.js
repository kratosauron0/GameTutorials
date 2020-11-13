'use strict';

let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let coin;

function setup() {
  cnv = createCanvas(w, h);

  textFont('monospace');

  player = new Player();

  coin = new Coin();

}

function draw() {

  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
      case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
      break;
      case 'YOU WIN':
        youWin();
        cnv.mouseClicked(youWinMouseClicked);
      break;
      default:
      break;


  }
}

function title() {
  background(8, 163, 150);
  textSize(75);
  fill(255);
  textAlign(CENTER);
  text('Fruit Basket', w/2, h/5);

  textSize(30);
  text('Click Anywhere To Start!', w/2, h/2);
}

function titleMouseClicked() {
  console.log('canvas is Clicked on Title Page');
  state = 'level 1'
}

function level1() {
  background(252, 3, 157);
  //text('Click for points', w/2, h - 30);

player.display();

coin.display();
coin.move();

}

function level1MouseClicked() {
  points += 1;
  console.log('points =' + points);

  if (points >= 10){
    state = 'YOU WIN';
  }
}

function youWin(){
  background(255, 212, 23);
  textSize(80);
  stroke(255);
  text('YOU WIN', w/2, h/2);

  textSize(30);
  text('Click Anywhere To ReStart!', w/2, h * 3/4);
}

function youWinMouseClicked(){
 state = 'level 1'
 points = 0;
}
