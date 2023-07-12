const morpion = document.getElementById('morpion')
const info = document.getElementById('info')
let gameStatus = "X"

// génération des cases du morpion
for (let i = 0; i < 9; i++) {
    morpion.insertAdjacentHTML('beforeend', '<p class="box"></p>');
}



// affichage du statut de la partie
switch (gameStatus) {
    case "X":
        info.insertAdjacentHTML('beforeend', 'Tour du joueur 1 (X)')
        break;
    case "O":
        info.insertAdjacentHTML('beforeend', 'Tour du joueur 2 (O)')
        break;
    case "winX":
        info.insertAdjacentHTML('beforeend', 'Le joueur 1 (X) a gagné')
        break;
    case "winO":
        info.insertAdjacentHTML('beforeend', 'Le joueur 2 (O) a gagné')
        break;
    case "draw":
        info.insertAdjacentHTML('beforeend', 'Égalité, personne ne gagne !')
        break;
}