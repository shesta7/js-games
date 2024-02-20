const playerChar = 'X'
const compChar = '0'

let gameOver = false;
let winner = '';

const cells = document.querySelectorAll(".cell")

cells.forEach((x, i) => {
    x.addEventListener("click", () => {
        playerMove(x, i)
        checkEndGame()
        compMove()
    })
})


function playerMove(x, i) {
    if(gameOver)
        return;

    if (!x.innerHTML) {
        x.innerHTML = playerChar
    }
}

function compMove() {
    if(gameOver)
        return;

    const index = Math.floor(Math.random() * cells.length)

    if (!cells[index].innerHTML) {
        setTimeout(() => {
            cells[index].innerHTML = compChar
            checkEndGame()
        }, 200)
        
    }
    else if (isAnyCellEmpty()) {
        compMove();
        return;
    }
}

function isAnyCellEmpty() {
    for (let i = 0; i < cells.length; i++) {
        if (!cells[i].innerHTML)
            return true;
    }

    return false;
}

function checkWin() {
    if (cells[0].innerHTML && cells[0].innerHTML == cells[1].innerHTML
        && cells[0].innerHTML == cells[2].innerHTML) {
            winner = cells[0].innerHTML;
        return true;
    }

    if (cells[3].innerHTML && cells[3].innerHTML == cells[4].innerHTML
        && cells[3].innerHTML == cells[5].innerHTML) {
            winner = cells[3].innerHTML;

        return true;
    }

    if (cells[6].innerHTML && cells[6].innerHTML == cells[7].innerHTML
        && cells[6].innerHTML == cells[8].innerHTML) {
            winner = cells[6].innerHTML;

        return true;
    }

    if (cells[0].innerHTML && cells[0].innerHTML == cells[3].innerHTML
        && cells[0].innerHTML == cells[6].innerHTML) {
            winner = cells[0].innerHTML;

        return true;
    }

    if (cells[1].innerHTML && cells[1].innerHTML == cells[4].innerHTML
        && cells[1].innerHTML == cells[7].innerHTML) {
            winner = cells[1].innerHTML;

        return true;
    }

    if (cells[2].innerHTML && cells[2].innerHTML == cells[5].innerHTML
        && cells[2].innerHTML == cells[8].innerHTML) {
            winner = cells[2].innerHTML;

        return true;
    }

    if (cells[0].innerHTML && cells[0].innerHTML == cells[4].innerHTML
        && cells[0].innerHTML == cells[8].innerHTML) {
            winner = cells[0].innerHTML;

        return true;
    }

    if (cells[2].innerHTML && cells[2].innerHTML == cells[4].innerHTML
        && cells[2].innerHTML == cells[6].innerHTML) {
            winner = cells[2].innerHTML;
        return true;
    }
}


function checkEndGame()
{
    if(checkWin())
    {
        gameOver = true;
        setTimeout(() => {
            alert(`выиграли ${winner}`)
        }, 100)
    }

    if(!isAnyCellEmpty())
    {
        gameOver = true;
        setTimeout(() => {
            alert(`выиграли ${winner}`)
        }, 100)
    }
}