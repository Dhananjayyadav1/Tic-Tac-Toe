import React, { useState } from 'react';
import Square from './Square';
import { WinningLogic } from './WinnerLogic';

const Board = () => {
    const [square, setSquare] = useState(Array(9).fill(null));
    const [change, setChange] = useState(true);
    const [winCount, setwinCount] = useState({ X: 0, O: 0 });

    const winningInfo = WinningLogic(square);
    const winner = winningInfo.winner;

    const winnerHighlight = winningInfo.line;
    let status;
    if (winner) {
        status = "Hurray the winner is " + winner;
    } else if (winningInfo.isDraw) {
        status = "It's a Draw";
    } else {
        status = "Turn of Player " + (change ? "X" : "O");
    }

    const continued = () => {
        if(winner)
        setSquare(Array(9).fill(null));
        if(winner==="X")
        setwinCount({...winCount, X: winCount.X + 1});
        if(winner==="O")
        setwinCount({...winCount, O: winCount.O + 1});
    }

    const restart = () => {
        setSquare(Array(9).fill(null));
    }
    
      function clearHistory() {
        setwinCount({ X: 0, O: 0 });
        restart();
      }

    const clicking = (i) => {
        const squares = square.slice();
        if (squares[i] === null) {
            if (winningInfo.end) {
                squares[i] = change ? "X" : "O";
            }
            setSquare(squares);
            setChange(!change);
        }
    }

    const renderSquare = (i) => {
        return (
            <Square value={square[i]} winnerHighlight={winnerHighlight && winnerHighlight.includes(i)} onClick={() => clicking(i)} />
        )
    }

    return (
        <>
            <div className="container">
                <h1><span>T</span>ic <span>T</span>ac <span>T</span>oe</h1>
                <div className="win-history">
                    <ul>
                        <li id="xwin">X's WINS: {winCount.X}</li>
                        <li id="owin">O's WINS: {winCount.O}</li>
                    </ul>
                </div>
                <div className="status">{status}</div>
                <div className="board">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
                <div className="center">
                    <button className="gamebtn" id={((square.includes("X") || square.includes("O")) ? "" : "active")} onClick={restart}>Restart</button>
                    <button className="gamebtn" id={((winner) ? "" : "active")} onClick={continued} >Continue</button>
                </div>
                <div className="center">
                    <button className="gamebtn" id={((winCount.O===0 && winCount.X===0) ? "active" : "")} onClick={clearHistory}>Clear History</button>
                </div>
            </div>
        </>
    );
}

export default Board;
