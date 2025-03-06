# Tic-Tac-Toe in React

This is a simple Tic-Tac-Toe game built with React and Vite. The application supports two players and includes the following features:

- **Player Name Editing:** Each player can change their name before starting the game.
- **Move Log:** The application records and displays the history of moves, showing which player selected which cell.

## Features

- **Fast Loading:** Vite ensures rapid build times and a quick startup.
- **Interactive UI:** A modern interface that allows real-time editing of player names.
- **Move Logging:** Complete history of all moves to easily track the game progress.

## Installation and Running

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/tic-tac-toe-react.git
   cd tic-tac-toe-react
   ```
2. **Install dependencies:**

```
npm install
```

3. **Run the application in development mode:**

```
npm run dev
```

4. **Open your browser:**

Navigate to the address shown in your terminal.

## Project Structure

- **src/** – Source code of the application.
  - **components/** – React components, including:
    - `Board.jsx` – The game board component.
    - `Cell.jsx` – Individual cell component.
    - `PlayerEditor.jsx` – Component for editing the player's name.
    - `MoveLog.jsx` – Component for displaying the move history.
  - **App.jsx** – Main application component.
  - **index.jsx** – Application entry point.

## Functionality

### Player Name Editing

The `PlayerEditor.jsx` component allows each player to edit their name, adding a personal touch to the game.

### Move Log

The `MoveLog.jsx` component displays the move history, logging which player selected which cell, making it easy to track the progress of the game.

## Scripts

- `npm run dev` – Runs the application in development mode.
- `npm run build` – Builds the application for production.
- `npm run preview` – Previews the production build.

## Technologies

- **React:** For building the user interface.
- **Vite:** Provides fast builds and hot module reloading.
- **JavaScript (ES6+):** Utilizes modern syntax and features.

---

Enjoy the game and make your best moves!
