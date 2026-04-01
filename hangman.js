const POSSIBLE_WORDS = [
    "obdurate",
    "verisimilitude",
    "defenestrate",
    "obsequious",
    "dissonant",
    "toady"
];

var word = "";
var guesses = "";
 var guesscount;
 const MAX_GUESSES = 6;

let newGame = function() {
    let randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    guesses = "";
    updatePage();
}

let updatePage = function() {
    let clueString = "";

    for (let i = 0; i < word.length; i++) {
        var currentLetter = word.charAt(i);

        if (guesses.indexOf(currentLetter) >= 0) {
            clueString += currentLetter + " ";
        }
        else {
            clueString += "_ ";
        }
    }

    let clue = document.getElementById("clue");
    clue.textContent = clueString;

    let guessArea = document.getElementById("guesses");
    guessArea.textContent = "Guesses: " + guesses;

let image = document.getElementById("hangmanpic");
    image.src = `images/hangman${guesscount}.gif`;

}

let guessLetter = function() {
    let input = document.getElementById("guess");
    let letter = input.value;
    letter = letter.toLowerCase();

    if (word.indexOf(letter) < 0) {
        guesscount--;
    }

    guesses += letter;
    input.value = "";
    updatePage();
}