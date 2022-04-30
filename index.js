const $stoneButton1 = document.querySelector(".button-stone-player-1");
const $paperButton1 = document.querySelector(".button-paper-player-1");
const $scissorsButton1 = document.querySelector(".button-scissors-player-1");

const $stoneButton2 = document.querySelector(".button-stone-player-2");
const $paperButton2 = document.querySelector(".button-paper-player-2");
const $scissorsButton2 = document.querySelector(".button-scissors-player-2");

const $fieldplayer1 = document.querySelector(".field-player-1");
const $fieldplayer2 = document.querySelector(".field-player-2");

const $winnertitle = document.querySelector('.winner-title')

let moveplayer1 = ''
let moveplayer2 = ''
let GameResult = null

function verifyGame(){
  if (moveplayer1 == 'stone' && moveplayer2 == 'paper') {
    gameResult = 2
  } else if (moveplayer1 == 'stone' && moveplayer2 == 'scissors') {
    gameResult = 1
  } else if (moveplayer1 == 'paper' && moveplayer2 == 'stone') {
    gameResult = 1
  } else if (moveplayer1 == 'paper' && moveplayer2 == 'scissors') {
    gameResult = 2
  } else if (moveplayer1 == 'scissors' && moveplayer2 == 'stone') {
    gameResult = 2
  } else if (moveplayer1 == 'scissors' && moveplayer2 == 'paper') {
    gameResult = 1
  } else if (moveplayer1 == moveplayer2) {
    gameResult = 0
  }
}

function printGameResult() {
  if (gameResult == 0) {
    $winnertitle.innerHTML = 'empatou!'
  } else if (gameResult == 1) {
    $winnertitle.innerHTML = 'jogador 1 ganhou!'
  } else if (gameResult == 2) {
    $winnertitle.innerHTML = 'jogador 2 ganhou!'
  }
}

$stoneButton1.addEventListener("click", function () {
  $fieldplayer1.innerHTML = '<img class="move-image" src="stone.png">';
  moveplayer1 = 'stone'
  verifyGame()
  printGameResult()
});

$paperButton1.addEventListener("click", function () {
  $fieldplayer1.innerHTML = '<img class="move-image" src="paper.png">';
  moveplayer1 = 'paper'
  verifyGame()
  printGameResult()
});
$scissorsButton1.addEventListener("click", function () {
  $fieldplayer1.innerHTML = '<img class="move-image" src="scissors.png">';
  moveplayer1 = 'scissors'
  verifyGame()
  printGameResult()
});

$stoneButton2.addEventListener("click", function () {
  $fieldplayer2.innerHTML = '<img class="move-image" src="stone.png">';
  moveplayer2 = 'stone'
  verifyGame()
  printGameResult()
});
$paperButton2.addEventListener("click", function () {
  $fieldplayer2.innerHTML = '<img class="move-image" src="paper.png">';
  moveplayer2 = 'paper'
  verifyGame()
  printGameResult()
});
$scissorsButton2.addEventListener("click", function () {
  $fieldplayer2.innerHTML = '<img class="move-image" src="scissors.png">';
  moveplayer2 = 'scissors'
  verifyGame()
  printGameResult()
});
