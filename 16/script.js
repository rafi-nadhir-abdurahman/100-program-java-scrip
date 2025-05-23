const maze = document.getElementById("maze");
const cells = maze.children;
const message = document.getElementById("message");

// Player start index in grid (row 5, col 0)
let playerIndex = 35;

function movePlayer(newIndex) {
  if (!cells[newIndex]) return; // index di luar grid

  // Cek dinding (background #333 = rgb(51, 51, 51))
  if (cells[newIndex].style.backgroundColor === "rgb(51, 51, 51)") {
    return; // jangan bergerak ke dinding
  }

  // Reset warna kotak player lama
  cells[playerIndex].style.backgroundColor = "#eee";

  playerIndex = newIndex;
  cells[playerIndex].style.backgroundColor = "#2196F3"; // warna biru player

  if (cells[playerIndex].id === "end") {
    message.textContent = "🎉 Selamat! Kamu menyelesaikan maze!";
    document.removeEventListener("keydown", handleKey);
  }
}

function handleKey(e) {
  const rowLength = 7;
  switch (e.key) {
    case "ArrowUp":
      movePlayer(playerIndex - rowLength);
      break;
    case "ArrowDown":
      movePlayer(playerIndex + rowLength);
      break;
    case "ArrowLeft":
      if (playerIndex % rowLength !== 0) movePlayer(playerIndex - 1);
      break;
    case "ArrowRight":
      if (playerIndex % rowLength !== rowLength - 1) movePlayer(playerIndex + 1);
      break;
  }
}

document.addEventListener("keydown", handleKey);
