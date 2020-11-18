function bestMove() {
  // AI to make its turn
  let bestScore = -Infinity;
  let move;
  for (let i = 0; i < b.n; i++) {
    for (let j = 0; j < b.n; j++) {
      // Is the spot available?
      if (b.board[i][j] == '') {
        b.board[i][j] = ai;
        let score = minimax(b, 0, false);
        b.board[i][j] = ''
        if (score > bestScore) {
          bestScore = score;
          move = {
            i,
            j
          };
        }
      }
    }
  }
  b.board[move.i][move.j] = ai;
}

let scores = {
  X: -10,
  O: 10,
  tie: 0
};

function minimax(board, depth, isMaximizing) {
  let outcome = board.result();
  if (outcome) {
    return scores[outcome];
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < b.n; i++) {
      for (let j = 0; j < b.n; j++) {
        // Is the spot available?
        if (board.board[i][j] == '') {
          board.board[i][j] = ai;
          let score = minimax(board, depth + 1, false);
          board.board[i][j] = '';
          bestScore = max(score, bestScore);
        }
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < b.n; i++) {
      for (let j = 0; j < b.n; j++) {
        // Is the spot available?
        if (board.board[i][j] == '') {
          board.board[i][j] = human;
          let score = minimax(board, depth + 1, true);
          board.board[i][j] = '';
          bestScore = min(score, bestScore);
        }
      }
    }
    return bestScore;
  }
}