const show = 1
const hide = 0

function showElement (show, elementName) {
  document.getElementById(elementName).style.opacity = show
}

const rock = 1
const paper = 2
const scissors = 3

// eslint-disable-next-line no-unused-vars
function RPS (playerChoice) {
  ResetScene()
  const computerChoice = Math.trunc(Math.random() * 3) + 1
  showComputerChoice(computerChoice)

  // draw
  if (playerChoice === computerChoice) {
    draw()
  } else if ((playerChoice === rock && computerChoice === scissors) ||
      (playerChoice === paper && computerChoice === rock) ||
      (playerChoice === scissors && computerChoice === paper)) {
    win()
  } else {
    loose()
  }
}

function showComputerChoice (choise) {
  showElement(hide, 'computerRock')
  showElement(hide, 'computerPaper')
  showElement(hide, 'computerScissors')

  const numberToNamaMap = {
    1: 'computerRock',
    2: 'computerPaper',
    3: 'computerScissors'
  }

  showElement(show, numberToNamaMap[choise])
}

function ResetScene () {
  showElement(hide, 'win')
  showElement(hide, 'draw')
  showElement(hide, 'lose')
  showElement(show, 'computerRock')
  showElement(show, 'computerPaper')
  showElement(show, 'computerScissors')
}

function win () {
  console.log('You win!')
  showElement(show, 'win')
}

function loose () {
  console.log('You loose!')
  showElement(show, 'lose')
}

function draw () {
  console.log('You draw!')
  showElement(show, 'draw')
}
