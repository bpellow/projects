let reset;
let status;
let b;
let run = true;
let human = 'X'
let ai = 'O'
let currentPlayer = human


function setup() {
  createCanvas(displayWidth / 3, displayWidth / 3);
  b = new Board(3)
  b.drawGrid()
  //DOM Elements
  status = select('#status')
  reset = createButton('Reset')
}

function draw() {

  status.html(`${currentPlayer}\'s turn`)
  if (b.result()) {
    run = false;
    if (b.result() == 'tie') {
      status.html('Tie!')
    } else {
      status.html(b.result() + " wins!")
    }
  } else if (currentPlayer == ai) {
    //AI move
    bestMove();
    b.display();
    currentPlayer = human;
  }
  reset.mousePressed(function() {
    b.newBoard();
    status.html('');
    run = true;

  })
}

function mousePressed() {
  if (mouseX <= width && mouseY <= height) { //is the mouse within canvas?
    let pos = b.getPos();
    //player move
    if (run) {
      if (!(b.board[pos[0]][pos[1]]) && currentPlayer == human) {
        b.board[pos[0]][pos[1]] = human;
        b.display();
        currentPlayer = ai;
      }
    }
  }
}