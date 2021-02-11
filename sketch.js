var board = [];
var turn; 

function setup() {
  createCanvas(400,400);

  for(var j = 25; j < 400; j = j + 50) {
    for(var i = 25; i < 400; i = i + 50) {
      board.push(new BlockClass(i, j));
    }
  }

  warrior1 = new Warrior(board[0].x, board[0].y);

  assassin1 = new Assassin(board[1].x, board[1].y);
  assassin2 = new Assassin(board[5].x, board[5].y);
  tank1 = new Tank(board[2].x, board[2].y);

  mage1 = new Mage(board[3].x, board[3].y);
}

function draw() {
  background(255,255,255);  

  for(var i = 0; i < board.length; i++) {
    board[i].display();
  }

  warrior1.display();
  if(mouseIsPressed){
    assassin1.projection()
    assassin2.projection()
  }
  assassin1.display();
  assassin2.display();
  tank1.display();

  mage1.display();
  

 
  
}

function mouseDragged() {
  assassin1.movement()
  assassin2.movement()
}

function mouseReleased(){
  assassin1.restriction();
  assassin2.restriction();
}