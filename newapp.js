//Global variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');

let missedVar = 0;

//Creates phrases array
const phrases = [
  "never give up",
  "it will be ok",
  "coding is hard",
  "coding is stupid",
  "boss bitches only"
];

//listens for start game button to be clicked
startButton.addEventListener('click', (event) => {
  overlay.style.display = 'none';
});

//get a random phrase as its own array
const getRandomPhraseAsArray = arr => {
  //choose random number for phrase
  let randomNumber = Math.floor(Math.random() * (arr.length));
  //use variable to select index inside of the array
  let randomPhrase = phrases[randomNumber];

  let characterArr = randomPhrase.split("");
  //return the random phase from the randomNumber index as an array of itself with each word at a different index
  return characterArr;
};

getRandomPhraseAsArray(phrases);

const addPhraseToDisplay = arr => {

  //loop through array of characters
  for (let i = 0; i < arr.length; i++) {
    //create a list item
    const li = document.createElement('li');
    //put the character inside the list item
    li.textContent = arr[i];
    //append the list item to #phrase ul
    //append class name
    if (li.textContent === ' ') {
        li.className = 'space';
    } else {
        li.className = 'letter';
    }
    const displayPhrase = document.querySelector('ul');
    displayPhrase.appendChild(li);
  }
};

let newInput = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(newInput);

//function to check for matches between code and userinput
//used inside of the event listener
const checkLetter = (button) => {
let buttonContent = document.getElementsByTagName('button').textContent;
let buttonFalse;
let letterClass = document.getElementsByClassName('letter');
//loop through the letter class from last step
for (let i = 0; i < letterClass.length; i++) {
  if (buttonContent === letterClass[i].textContent) {
    let matched = letterClass[i].textContent.classList.add = 'show';
} else {
    return buttonFalse;
}

}
return letterClass;
};


// listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', (event) => {
  
});

const checkWin = () => {

};
