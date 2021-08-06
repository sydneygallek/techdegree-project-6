//Global variables

let qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let startButton = document.getElementsByClassName('btn__reset');

//Creates phrases array
let phrases = ['never give up', 'it will be ok', 'coding is hard', 'coding is stupid', 'boss bitches only'];

//tracking variables
let missedVar = 0;



//function to pull a random number based on array length
const getRandomPhraseAsArray = arr => {
    //choose random number for phrase
    const randomNumber = Math.floor(Math.random() * (phrases.length));
    const randomPhrase = phrases[randomNumber];

    return randomPhrase;
}

//
const addPhraseToDisplay = arr => {
    //loop through array of characters
    for (let i = 0; i < arr.length; i++) {
        //create a list item
        const li = document.createElement('li');
        //put the character inside the list item
        li.textConent = arr[i];
        //append the list item to #phrase ul
        phrase.append(li);
    }
    
}


//function to check for matches between code and userinput
const checkLetter = letter => {
//get all elements for letter class
const letters = document.querySelectorAll('.letter');
const matchingLetter = null;
const matchCounter = 0;

    for (let i = 0; i < arr.length; i++) {
        //matched
        if (letter === letters[i].textContext) {
            //add show class to li
            letters[i].className += ' show';
            //store matching letter inside a variable
            matchingLetter = letter;
            matchCounter++;
        }
    }
}

const checkWin = () => {

}

startButton.addEventListener('click', () => {
    //filter out clicks that don't happen or button has already chosen the class
    if (startButton.textContent === 'Start Game') {
        startGame();
        overlay.style.display = 'none';
    } else {
        resetGame();
        startGame();
        overlay.style.display = 'none';
    }

  
}
);

qwerty.addEventListener('click', e => {

}).display('none');





