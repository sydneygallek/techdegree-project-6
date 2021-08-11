//Global variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
const phraseUL = phrase.querySelector('ul');
let missedVar = 0;

//Creates phrases array
const phrases = [
  'never give up',
  'it will be ok',
  'coding is hard',
  'coding is stupid',
  'boss bitches only'
];

//listens for start game button to be clicked
startButton.addEventListener('click', (event) => {
  overlay.style.display = 'none';
});

//get a random phrase as its own array
const getRandomPhraseAsArray = arr => {
  //choose random number for phrase
  const randomNumber = Math.floor(Math.random() * (arr.length));
  //use variable to select index inside of the array
  const randomPhrase = phrases[randomNumber].split(' ');
  //return the random phase from the randomNumber index as an array of itself with each word at a different index
  return randomPhrase;
};

const addPhraseToDisplay = arr => {
  console.log(arr);
  //loop through array of characters
  for (let i = 0; i < arr.length; i++) {
    //create a list item
    const li = document.createElement('li');
    //put the character inside the list item
    li.textContent = arr[i];
    //append the list item to #phrase ul
    phraseUL.append(li);
    //adds class to list items of either space or letter
  }
};

let newInput = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(newInput);
//function to check for matches between code and userinput
const checkLetter = (letter) => {

};

const checkWin = () => {

};

// listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', (event) => {

});