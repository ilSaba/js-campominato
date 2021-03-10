var bombsArray = [];
var safesArray = [];

// Difficoltà;
var nonSelezionato = true;

while (nonSelezionato) {
    var difficulty = parseInt(prompt("Scegli il livello di difficoltà: {0=Easy} {1=Medium} {2=Pro}"));

    nonSelezionato = false;
    switch (difficulty) {
        case 0:
            var maxNumber = 100;
        break;
        case 1:
            var maxNumber = 80;
        break;  
        case 2:
            var maxNumber = 50;
        break;
        default:
            nonSelezionato = true;
        break;
    }
}

bombsArray = createBombs(bombsArray, maxNumber);

var punteggio = game(bombsArray, safesArray, maxNumber);


// Stampo punteggio

console.log("HAI PERSO!");
console.log("Hai ottenuto un punteggio di: " + punteggio);


// FUNCTION
    // Conto da 1 a 16;
    // Genero un numero tra 1 e 100;
    // Verifico che il numero generato non esiste già nell'array;

function createBombs(array, max) {
    while (array.length < 16) {
        var numero = getRndInteger(1, max)

        if (!array.includes(numero)) {
            array.push(numero);
        }
    }
    return array;
}


// Contare da 1 e 100 - 16
    // Verifico che il numero sia compreso da 1 e 100 [1 <= numero <= 100....]....
    //....Inoltre mi assicuro che sia un numero [...&& !isNaN]
    // Verifico che non sia una bomba. Se lo è, TERMINO.
    
function game (bombsArray, safesArray, maxNumber) {
    while (safesArray.length < maxNumber - 16) {
        var numeroUtente = parseInt(prompt("Inserisci un numero e prova a non beccare le bombe sparse nel campo!"))

        if (!isNaN(numeroUtente) && 1 <= numeroUtente && numeroUtente <=100 && !safesArray.includes(numeroUtente))
            if (!bombsArray.includes(numeroUtente)) {
                safesArray.push(numeroUtente);
            } else {
                return safesArray.length;
            }
    }
    return safesArray.length;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}