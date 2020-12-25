var gameState = 0;
var playerCount;
var db;
var form,player,game;

function setup(){
  createCanvas(400,400);
  db = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
}