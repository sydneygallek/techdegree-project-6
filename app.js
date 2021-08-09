//Global variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.getElementsByClassName('btn__reset');
let missedVar = 0;

//Creates phrases array
const phrases = [
 'never give up',
 'it will be ok',
 'coding is hard',
 'coding is stupid',
 'boss bitches only'];

//listens for start game button to be clicked
startButton.addEventListener('click', () => {
    overlay.style.display = 'none;'
});


//declares function and its parameters
//get a random phrase as its own array
const getRandomPhraseAsArray = arr => {
    //choose random number for phrase
    const randomNumber = Math.floor(Math.random() * (arr.length));
    //use variable to select index inside of the array
    const randomPhrase = phrases[randomNumber].split(' ');
    //call the function and pass phrases to it

    //return the random phase from the randomNumber index as an array of itself with each word at a different index
    return randomPhrase;
}
//calls the function above to return the target phrase
getRandomPhraseAsArray(phrases); 


const addPhraseToDisplay = arr => {
    //loop through array of characters
    for (let i = 0; i < arr.length; i++) {
        //create a list item
        const li = document.createElement('li');
        //put the character inside the list item
        li.textConent = arr[i];
        //append the list item to #phrase ul
        phrase.append(li);
        //adds class to list items of either space or letter
        if (arr[i] == ' ') {
            li.className += "space";
        } else {
            li.className += "letter";
        }
    }
    
}


//function to check for matches between code and userinput
const checkLetter = (letter) => {
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
//create a variable to store the li elements with class name letter and show
const letter = document.getElementsByClassName('letter');
const show = document.getElementByClassName('show');
//check if length of two variables is the same
if (letter.length === show.length); {
    //if they are create the win overlay by adding the win class to start overlay
    document.getElementById('#overlay').className = "win"; 
    overlay.style.display = 'flex;'

}
}



// listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e => {
    if (e.target.tagName ==="BUTTON") {
        let button, letterFound = '',
        tries = document.querySelectorAll('.tries');
    }
});





