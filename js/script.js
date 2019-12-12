//Conteneurs
let containerScreen1 = document.getElementById("screen1");
let containerScreen2 = document.getElementById("screen2");
let containerScreen3 = document.getElementById("screen3");
let containerScreen4 = document.getElementById("screen4");
let startGame = document.getElementById("startGame");

let randomLetter = String.fromCharCode(Math.floor((Math.random() * 25) + 97));
let countdownNumber = document.getElementById('countdown-number');
let countdown = 5;
let restartGame = document.getElementById("restartGame");
let backToHome = document.getElementById("backToHome");

let containerGameOverMessage = document.getElementById("containerGameOverMessage");


//Création de l'affichage de la lettre et du score:
let score = 0;
let letterDisplay = document.getElementById("letterDisplay");
let letterElement = document.createElement("p");
letterDisplay.appendChild(letterElement)
letterDisplay.id = "letterDisplay"
letterElement.id = "letterElement";
letterElement.textContent = randomLetter;
let scoreElement = document.createElement("p");
let scoreDisplay = document.getElementById("scoreDisplay");
scoreDisplay.appendChild(scoreElement);
scoreElement.textContent = score;
scoreElement.className = "score"

//Affichage de l'image d'exemple:
let exampleLetterDisplay = document.getElementById("exampleLetterDisplay")
exampleLetterElement = document.createElement("p")
exampleLetterElement.id = "exampleLetterElement"
exampleLetterDisplay.appendChild(exampleLetterElement)
exampleLetterElement.textContent = randomLetter;

function changeScreen(screen1, screen2) {
  score = 0
  scoreElement.textContent = score;
  screen1.style.display = "flex";
  screen2.style.display = "none";
  countdown = 5;
  countdownNumber.textContent = countdown;
}
// Booléen qui permet d'activer la condition de l'event listener seulement en jeu.
let isPlaying = false;

//Boutons
startGame.addEventListener("click", function () {
  containerScreen1.style.display = "none";
  containerScreen2.style.display = "flex";
  countdownNumber.textContent = countdown;
  isPlaying = true;
  countdown = 5;
});

restartGame.addEventListener("click", function () {
  containerScreen3.style.display = "none";
  containerScreen2.style.display = "flex";
  countdownNumber.textContent = countdown;
  isPlaying = true;
  countdown = 5;
});

backToHome.addEventListener("click", function () {
  containerScreen3.style.display = "none";
  containerScreen1.style.display = "flex";
  isPlaying = false;
});
//Message de partie terminée
let gameOverMessage = document.createElement("p")
gameOverMessage.id = "gameOverMessage";
containerGameOverMessage.appendChild(gameOverMessage)

//Mise en place du timer
timerID = setInterval(function () {
  if (isPlaying) {
    countdown--;
  }
  countdownNumber.textContent = countdown;
  if (countdown == 0 && isPlaying) {
    gameOverMessage.textContent = "Votre score est de " + score + " points ! Pouvez-vous faire mieux?"
    changeScreen(containerScreen3, containerScreen2);
    isPlaying = false;
  }
}, 1000);

document.addEventListener("keydown", function () {
  if (isPlaying == false) {
    if (event.key == exampleLetterElement.textContent || event.key == exampleLetterElement.textContent.toUpperCase()) {
      exampleLetterElement.textContent = String.fromCharCode(Math.floor((Math.random() * 25) + 97));

    }
  }
  if (isPlaying)
    if (event.key == randomLetter || event.key == randomLetter.toUpperCase()) {
      clearInterval(timerID);
      timerID = setInterval(function () {
        if (isPlaying) {
          countdown--;
        }
        countdownNumber.textContent = countdown;
        if (countdown == 0 && isPlaying) {
          gameOverMessage.textContent = "Votre score est de " + score + " points ! Pouvez-vous faire mieux?"
          changeScreen(containerScreen3, containerScreen2);
          isPlaying = false;
        }
      }, 1000);
      score++;
      scoreElement.textContent = score;
      randomLetter = String.fromCharCode(Math.floor((Math.random() * 25) + 97));
      letterElement.textContent = randomLetter
      countdown = 5;
      if (score >= 10) {
        countdown = 4;

      }
      if (score >= 25) {
        countdown = 3;

      }
      if (score >= 50) {
        countdown = 2;
      }

      if (score >= 100) {
        countdown = 1;
      }

      countdownNumber.textContent = countdown;

    } else {
      gameOverMessage.textContent = "Votre score est de " + score + " points ! Pouvez-vous faire mieux?"
      changeScreen(containerScreen3, containerScreen2);
      isPlaying = false;

    }
})