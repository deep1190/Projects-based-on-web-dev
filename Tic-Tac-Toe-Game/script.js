let turn = "X";
let isGameOver = false;

const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

const checkWin = () => {
    let boxTextElements = document.getElementsByClassName('boxtext');
    let winningCombinations = [
        [0, 1, 2, 5, 15, 0],   // Horizontal top
        [3, 4, 5, 5, 15, 0],   // Horizontal middle
        [6, 7, 8, 5, 15, 0],   // Horizontal bottom
        [0, 3, 6, -5, 15, 90], // Vertical left
        [1, 4, 7, 5, 15, 90],  // Vertical center
        [2, 5, 8, 15, 15, 90], // Vertical right
        [0, 4, 8, 5, 15, 45],  // Diagonal top-left to bottom-right
        [2, 4, 6, 5, 15, 135], // Diagonal top-right to bottom-left
    ];

    winningCombinations.forEach(combo => {
        if (
            (boxTextElements[combo[0]].innerText === boxTextElements[combo[1]].innerText) &&
            (boxTextElements[combo[1]].innerText === boxTextElements[combo[2]].innerText) &&
            (boxTextElements[combo[0]].innerText !== "")
        ) {
            console.log(`Winning combination: ${combo}`);
            document.querySelector('.info').innerText = boxTextElements[combo[0]].innerText + " Won";
            isGameOver = true;
            document.querySelector(".line").style.transform = `translate(${combo[3]}vw, ${combo[4]}vw) rotate(${combo[5]}deg)`;
            document.querySelector(".line").style.width = "20vw"; // Adjust width as needed
        }
    });
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(box => {
    let boxText = box.querySelector('.boxtext');
    box.addEventListener('click', () => {
        if (boxText.innerText === '' && !isGameOver) {
            boxText.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    });
});

let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
    let boxTexts = document.querySelectorAll('.boxtext');
    Array.from(boxTexts).forEach(boxText => {
        boxText.innerText = "";
    });
    turn = "X";
    isGameOver = false;
    document.querySelector(".line").style.width = "0"; // Reset width
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
});
