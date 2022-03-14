//global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const patternLength = 6; //length of secret pattern

//global variables
var pattern = [];
var progress = 0; //represents how far along the player is in guessing the pattern (i.e. indexing through the pattern array)
var gamePlaying = false; //truns true when user presses start and remains true unitl user wins, looses or presses stop
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var strike = 0; //no. of mistakes, max 3 stirkes and out

//This function generates a random button sequence
function generatePattern(array) {
  for (let i = 0; i < patternLength; i++) {
    var randInt = Math.floor(Math.random() * patternLength) + 1;
    array.push(randInt);
  }
}

function startGame() {
  //initialising game variables once game has started
  pattern = [];
  strike = 0;
  progress = 0;
  gamePlaying = true;

  //generating the random pattern
  generatePattern(pattern);

  //swapping the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden"); //document is the DOM object, getElementById is a method, adding the element to the class list "hidden"
  document.getElementById("stopBtn").classList.remove("hidden");

  //playing clue sequence
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;

  //hiding Stop and showing Start
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

//playing clues
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
    clueHoldTime = clueHoldTime - 10; //shortens hold time my 20 every round
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won! yay!");
}

function guess(btn) {
  if (!gamePlaying) {
    return;
  }
  if (btn == pattern[guessCounter]) {
    //if user guess matches the pattern enter
    if (guessCounter == progress) {
      //if level of progress is the same as the no.of guesses
      if (progress == pattern.length - 1) {
        //if progress is equivalent to the length of the pattern
        winGame();
      } else {
        progress += 1;
        playClueSequence();
      }
    } else {
      guessCounter += 1;
    }
  } else {
    strike += 1;
    if (strike != 3) {
      alert("Strike: " + strike);
      playClueSequence();
    } else {
      loseGame();
    }
  }
}

// Sound Synthesis Functions

function playTone(btn, len) {
  context.resume();
  startTone(btn);
  tonePlaying = true;
  setTimeout(function () {
    stopTone(btn);
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    document.getElementById("audio" + btn).load();
    document.getElementById("audio" + btn).play();
    tonePlaying = true;
  }
}
function stopTone(btn) {
  document.getElementById("audio" + btn).pause();
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
