//Global variables
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
let hearts = document.querySelectorAll('.tries');
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

//function to check for matches between code and user input
//used inside of the event listener
const checkLetter = (button) => {
let buttonContent = button.textContent;
let match = null;
let letterClass = document.getElementsByClassName('letter');
//loop through the letter class from last step
for (let i = 0; i < letterClass.length; i++) {
  if (buttonContent === letterClass[i].textContent) {
      match = button;
      letterClass[i].classList.add('show');
      }
  }
  return match;
}

//add event listener to user keyboard
//if the button text is equal to one of the letters add show class
//calls checkLetter to compare the variables
//remove heart else 
//finally calls check win function after 5 missed OR all letters are found
qwerty.addEventListener("click",(e)=>{
  if (e.target.tagName== "BUTTON"){
    const button = e.target;
    checkLetter(button);
    if(checkLetter(button) == null){
      missedVar+= 1;
      const heartimage= hearts[missedVar-1].querySelectorAll("img")[0];
      heartimage.src="images/lostHeart.png";
    }
    button.disabled=true;
  }
  checkWin();
  });
  

  //check win by comparing the letter class to the show class
  //if they are equal you win
  //if they missed 5 then the game is over display you lose
  function checkWin(){
  let title = document.querySelectorAll(".title")[0];
  var letterCount = document.querySelectorAll(".letter");
  var showCount = document.querySelectorAll(".show");
  letterCount = letterCount.length;
  showCount = showCount.length;
      if(letterCount == showCount){
    overlay.style.display ="";
    overlay.className="win";
        title.textContent="You win!"

  }
      if(missedVar>= 5) {
    overlay.style.display ="";
    overlay.className="lose";
     title.textContent = "You lose!";

    }
  }