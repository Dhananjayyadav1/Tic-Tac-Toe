export function WinningLogic(squares) {
    const winnings = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  
    for (let i = 0; i < winnings.length; i++) {
      const [a, b, c] = winnings[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return {
          winner: squares[a],
          line: winnings[i],
          isDraw: false,
          end: false
        };
      }
    }
  
    let isDraw = true;
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        isDraw = false;
      }
    }
  
    return {
      winner: null,
      line: null,
      isDraw: isDraw,
      end: true
    };
  }
  