# Tic-Tac-Toe Game

This is a simple **Tic-Tac-Toe** game built using **HTML**, **CSS**, and **JavaScript**. Players take turns to mark a 3x3 grid with either an "X" or an "O". The first player to align three of their marks horizontally, vertically, or diagonally wins the game.

## Features

- Two players: Player 1 (O) and Player 2 (X)
- Detects a win condition based on predefined patterns
- Displays a congratulatory message for the winner
- Declares a draw if no winner is found after all boxes are filled
- Reset and start a new game functionality

## How to Play

1. **Start**: Open the game in your browser.
2. **Take turns**: Players click on the empty boxes to mark their symbol (Player 1: "O", Player 2: "X").
3. **Winning the game**: The first player to get three of their marks in a row (either vertically, horizontally, or diagonally) wins.
4. **Game draw**: If all the boxes are filled without a winner, the game declares a draw.
5. **New game**: After a game is won or drawn, you can click the "New Game" or "Reset" button to restart.

## Game Logic

- The game tracks player turns using a boolean flag (`player0`).
- Every time a player clicks on a box, it is marked with "O" or "X" and disabled.
- The game checks the winner after every move based on the following patterns:

  ```javascript
  const winnerptrn = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
  ];
