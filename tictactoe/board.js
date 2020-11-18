class Board {
  constructor(n) {
    this.n = n
    this.unitWidth = width / this.n;
    this.unitHeight = height / this.n;
    this.board = Array(this.n).fill('').map(() => Array(this.n).fill(''));
  }
  drawGrid() {
    background(237, 238, 201);
    for (let i = 1; i < this.n; i++) {
      strokeWeight(6);
      stroke(191, 216, 189)
      line(this.unitWidth * i, 0, this.unitWidth * i, height);
      line(0, this.unitHeight * i, width, this.unitHeight * i);
    }
  }

  newBoard() {
    this.board = Array(this.n).fill('').map(() => Array(this.n).fill(''));
    this.drawGrid();
  }

  getPos() {
    let x = floor(mouseX / this.unitWidth);
    let y = floor(mouseY / this.unitHeight);
    return [y, x];
  }

  display() {
    for (var i = 0; i < this.n; i++) {
      for (var j = 0; j < this.n; j++) {
        let x = this.unitWidth * (i + 0.5);
        let y = this.unitHeight * (j + 0.5);
        let r = this.unitWidth / 4;
        strokeWeight(15);
        ;
        noFill();
        if (this.board[j][i] == 'X') {
          stroke(119, 191, 163);
          line(x - r, y - r, x + r, y + r);
          line(x + r, y - r, x - r, y + r);
        } else if (this.board[j][i]== 'O') {
          stroke(152, 154, 223);
          circle(x, y, r * 2);
        }
      }
    }
  }

  result() {
    let x = 'X'.repeat(this.n)
    let o = 'O'.repeat(this.n)
    let r;
    let available = this.n ** 2
    for (var i = 0; i < this.n; i++) {
      let row = '';
      let col = '';
      let diagonal1 = '';
      let diagonal2 = '';
      for (var j = 0; j < this.n; j++) {
        row += this.board[i][j]
        col += this.board[j][i];
        diagonal1 += this.board[j][j];
        diagonal2 += this.board[j][this.n - j - 1];
        if (row == x || col == x || diagonal1 == x || diagonal2 == x) {
          r = 'X';
        }
        if (row == o || col == o || diagonal1 == o || diagonal2 == o) {
          r = 'O';
        }
        if (this.board[i][j] != '') {
          available--
        }
      }
    }
    if (available == 0 && r == null) {
      r = 'tie';
    }
    return r
  }
}