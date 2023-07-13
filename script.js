const info = document.getElementById('info')
const endGameInfo = document.getElementById('endGameInfo')
const cells = document.querySelectorAll('[cell]')
const playerOne = "X"
const playerTwo = "O"
let playerTurn = playerOne

const winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

// gestion du clic
cells.forEach(cell => {
cell.addEventListener('click', playGame, {once: true});
});

// déroulement du jeu
function playGame (e) {
    e.target.innerHTML = playerTurn
    if (checkWin(playerTurn)) {
        updateInfo('win' + playerTurn);
        return endGame();
    } else if (checkDraw()) {
        updateInfo('draw');
        return endGame();
    }
    playerTurn === playerOne ? playerTurn = playerTwo : playerTurn = playerOne
    updateInfo(playerTurn)
}

// verification si gagnant
// verfifie si le symbole du joueur est dans les 3 cases de chaque pattern pré-défini plus haut
function checkWin (playerTurn) {
    return winningPatterns.some(pattern => {
        return pattern.every(index => {
            return cells[index].innerHTML === playerTurn;
        })
    })
}

// vérification si égalité
function checkDraw () {
    return [...cells].every(cell => {
        return cell.innerHTML === playerOne || cell.innerHTML === playerTwo
    })
}

// affichage du statut de la partie
function updateInfo (status) {
let statusText

switch (status) {
    case "X":
        statusText = 'Tour du joueur 1 (X)'
        break;
    case "O":
        statusText =  'Tour du joueur 2 (O)'
        break;
    case "winX":
        statusText =  'Le joueur 1 (X) a gagné'
        break;
    case "winO":
        statusText =  'Le joueur 2 (O) a gagné'
        break;
    case "draw":
        statusText =  'Égalité, personne ne gagne !'
        break;
}
info.innerHTML = statusText
endGameInfo.innerHTML = statusText
}

function endGame () {
    document.getElementById('endGame').style.display = 'flex'
}