document.addEventListener('DOMContentLoaded', () => {
    const boardSize = 5;
    const board = document.getElementById('game-board');

    function createBoard() {
        for (let i = 0; i < boardSize * boardSize; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.index = i;
            cell.addEventListener('click', () => handleClick(cell));
            board.appendChild(cell);
        }
    }

    function handleClick(cell) {
        const index = parseInt(cell.dataset.index);
        const x = index % boardSize;
        const y = Math.floor(index / boardSize);

        toggleCell(x, y);
        toggleCell(x - 1, y); // left
        toggleCell(x + 1, y); // right
        toggleCell(x, y - 1); // above
        toggleCell(x, y + 1); // below

        if (checkWin()) {
            window.alert('You win!');

        }
    }

    function toggleCell(x, y) {
        if (x < 0 || x >= boardSize || y < 0 || y >= boardSize) return;
        const index = y * boardSize + x;
        const cell = board.children[index];
        if (cell) {
            cell.classList.toggle('is-off');
        }
    }

    function randomizeBoard() {
        // Randomly toggle cells to create a starting configuration
        for (let i = 0; i < boardSize * boardSize; i++) {
            if (Math.random() < 0.5) {
                handleClick(board.children[i]);
            }
        }
    }

    function checkWin() {
   
        return Array.from(board.children).every(cell => !cell.classList.contains('is-on'));
        
    }

    createBoard();
    randomizeBoard();
});
