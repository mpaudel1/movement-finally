var board = [];

var player1Pos = [];

function setup() {
  createCanvas(400,400);

  for(var j = 25; j < 400; j = j + 50) {
    for(var i = 25; i < 400; i = i + 50) {
      board.push(new BlockClass(i, j));
    }
  }

  warrior1 = new Warrior(board[0].x, board[0].y);

  assassin1 = new Assassin(board[1].x, board[1].y);

  tank1 = new Tank(board[2].x, board[2].y);

  mage1 = new Mage(board[3].x, board[3].y);
}

function draw() {
  background(255,255,255);  

  for(var i = 0; i < board.length; i++) {
    board[i].display();
  }

  warrior1.display();

  assassin1.display();

  tank1.display();

  mage1.display();

  if(assassin1.velocityX === 0) {
    assassin1.restriction();
  }
}

function mouseDragged() {
  if(assassin1.x >= (mouseX - assassin1.radius) && assassin1.x <= (mouseX + assassin1.radius) 
  && assassin1.y >= (mouseY - assassin1.radius) && assassin1.y <= (mouseY + assassin1.radius)) {
    assassin1.x = mouseX;
    assassin1.y = mouseY;
    for (var i = 0; i < board.length; i++) {
      console.log(i);
      if (board[i].x >= (mouseX - board[i].width/2) && board[i].x <= (mouseX + board[i].width/2) 
      && board[i].y >= (mouseY - board[i].height/2) && board[i].y <= (mouseY + board[i].height/2)) {
        board[i].color = rgb(245, 245, 245);
        
      }
    } 
  }
}