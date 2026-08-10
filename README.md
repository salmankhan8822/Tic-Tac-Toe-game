# 🎮 Tic Tac Toe Game

A modern and responsive **Tic Tac Toe game** built with **HTML, CSS, and JavaScript**.  
The project features a clean user interface, interactive gameplay, winner detection, draw detection, and game reset functionality.

---

## 🚀 Live Demo
🔗 https://tic-tac-toe-game-project-mu.vercel.app/

---

## 📌 About The Project

This Tic Tac Toe project is a browser-based two-player game designed with a modern and responsive interface.
Players take turns placing **X** and **O** on a 3×3 game board. The application automatically checks for winning combinations and identifies whether a player wins or the game ends in a draw.
The project was created to strengthen my understanding of **JavaScript logic, DOM manipulation, event handling, and responsive UI development**.

---

## ✨ Features

- 🎮 Two-player gameplay
- ❌ X and O turn management
- 🏆 Automatic winner detection
- 🤝 Draw detection
- 🔄 Reset Game functionality
- 🆕 New Game functionality
- 📱 Responsive design
- 🎨 Modern user interface
- ⚡ Fast and lightweight
- 🖱️ Interactive game board
- 🚫 Prevents selecting an already-used box

---

## 🛠️ Technologies Used

- **HTML5** — Structure and semantic markup
- **CSS3** — Styling, layout, animations, and responsive design
- **JavaScript (ES6+)** — Game logic and DOM manipulation
- **Bootstrap 5** — Responsive layout and utility classes

---

## 🧠 JavaScript Concepts Practiced

This project helped me practice several important JavaScript concepts:

- DOM Manipulation
- Event Listeners
- Arrays
- Functions
- Conditional Statements
- Loops
- Arrow Functions
- `querySelector()` and `querySelectorAll()`
- Element manipulation
- Game state management
- Win-condition algorithms

---

## 🎯 How The Game Works

1. Player O starts the game.
2. Players take turns selecting an empty box.
3. The selected box becomes either **O** or **X**.
4. The game checks all possible winning combinations.
5. If three matching symbols are found, the player wins.
6. If all nine boxes are filled without a winner, the game ends in a draw.
7. Players can use **Reset Game** or **New Game** to start again.

---

## 🏆 Winning Patterns

The game checks these possible winning combinations:

```text
[0, 1, 2]
[0, 3, 6]
[0, 4, 8]
[1, 4, 7]
[2, 5, 8]
[2, 4, 6]
[3, 4, 5]
[6, 7, 8]

----
