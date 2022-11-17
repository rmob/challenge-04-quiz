var objectArray = [
    {
        question: 'First Question',
        choices: ['A', 'B', 'C', 'D'],
        answer: 'C'
    },
    {
        question: "Second Question",
        choices: ['E', 'F', 'G', 'H'],
        answer: 'F'
    },

    {
        question: "Third Question",
        choices: ['I', 'J', 'K', 'L'],
        answer: 'L'
    }];



var mainEl = document.querySelector('.main')
var parEl = document.createElement('p')
var headerEl = document.querySelector('h1')
var footerEl = document.querySelector('footer')
var navEl = document.querySelector('.nav-bar')
var clockEl = document.getElementById('clock')
clockEl.textContent = " ";
var footerH3El = document.querySelector('h3')
var quizBoxEl = document.querySelector('.quiz-box')
var questionEl = document.getElementById('question')
var li1 = document.getElementById('choice-one')
var li2 = document.getElementById('choice-two')
var li3 = document.getElementById('choice-three')
var li4 = document.getElementById('choice-four')
var finishEl = document.querySelector('#finish')
var correctAnswers = 0
var wrongAnswers = 0
var newBoxEl;
mainEl.appendChild(parEl)
parEl.textContent = 'hello this is a quiz motherfuckers its timed and everything good luck';
var startBtn = document.createElement('button');
var playAgainBtn = document.createElement('button')
playAgainBtn.innerHTML = 'Try again?';
playAgainBtn.setAttribute('class', 'playAgain-btn')
mainEl.appendChild(startBtn)
startBtn.setAttribute('class', 'start-btn')
startBtn.innerHTML = 'Start Quiz';
var timer;

// disappear the .main div

var rmvMain = function () {
   mainEl.setAttribute('style', 'display:none' );
   footerEl.append(playAgainBtn)
}

// reveal footer div

var revealFooterEl = function () {
    footerEl.setAttribute('style', 'display: flex')
}

var revealQuizBoxEl = function () {
    quizBoxEl.setAttribute('style', 'display: flex')
}

var hideQuizBoxEl = function () {
    quizBoxEl.setAttribute('style', 'display: none')
}

// display countdown in header, remove .main and footer div

var countdown = function() {
    var timeLeft = 60;
        timer = setInterval( function () {
            if (timeLeft > 1) {
                clockEl.textContent = timeLeft;
                timeLeft--;
            } else if (timeLeft === 1) {
                clockEl.textContent = timeLeft;
                timeLeft--
            } else if (timeLeft === 0) {
                clockEl.textContent = timeLeft + ' !!!';
                timeLeft--
            } else {
                footerH3El.textContent = 'GAME OVER';
                footerEl.setAttribute('style', 'font-size: 100px')
                rmvMain();
                revealFooterEl();
                clearInterval(timer);
                hideQuizBoxEl();
            }
        }, 1000);
        
        
}

var popQuestion1 = function () {
    questionEl.innerHTML =  objectArray[0].question;
    li1.innerHTML = objectArray[0].choices[0];
    li2.innerHTML = objectArray[0].choices[1];
    li3.innerHTML = objectArray[0].choices[2];
    li4.innerHTML = objectArray[0].choices[3];
    li3.addEventListener('click', function () {
        popQuestion2();
        correctAnswers++
        console.log(correctAnswers)

    })
    
}

var popQuestion2 = function () {
    questionEl.innerHTML =  objectArray[1].question;
    li1.innerHTML = objectArray[1].choices[0];
    li2.innerHTML = objectArray[1].choices[1];
    li3.innerHTML = objectArray[1].choices[2];
    li4.innerHTML = objectArray[1].choices[3];
    li2.addEventListener('click', function () {
        popQuestion3();
        correctAnswers++
        console.log(correctAnswers)
    })
}

var popQuestion3 = function () {
    questionEl.innerHTML =  objectArray[2].question;
    li1.innerHTML = objectArray[2].choices[0];
    li2.innerHTML = objectArray[2].choices[1];
    li3.innerHTML = objectArray[2].choices[2];
    li4.innerHTML = objectArray[2].choices[3];
    li4.addEventListener('click', function () {
        revealFinishEl();
        correctAnswers++
        console.log(correctAnswers)
        clearInterval(timer)
    })
}

var revealFinishEl = function () {
    finishEl.setAttribute('style', 'display: flex');
    quizBoxEl.setAttribute('style', 'display: none')
}




// add functionality to start button

startBtn.addEventListener('click', function() {
    newBoxEl = document.createElement('div');
    parEl.append(newBoxEl)
    newBoxEl.setAttribute('class', 'newb')
    startBtn.setAttribute('style', 'display: none')
    headerEl.setAttribute('style', 'display: none')
    parEl.setAttribute('style', 'display: none')
    countdown();
    revealQuizBoxEl();
    popQuestion1();


})

// restart the game
playAgainBtn.addEventListener('click', function () {
    location.reload();
})


