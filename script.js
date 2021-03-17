document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  let squares = Array.from(document.querySelectorAll('.grid div'))
  const ScoreDisplay = document.getElementById("score")
  const startButton = document.getElementById("startButton")
  const width = 15
  let nextRandom = 0

    

  const Ablock = 
  [2, 16, 18, 30, 34, 45, 46, 47,48,49,60,64]  

 const Bblock =
  [5,6,7,8,20,24,35,36,37,38,39,50,54,65,66,67,68]
  
  const Cblock = 
  [11,12,13,14,15,26,41,56,71,72,73,74,75]

  const Dblock =
  [75,76,77,78,90,94,105,109,120,124,135,136,137,138]

  const Eblock =
  [80,81,82,83,84,95,110,111,112,113,125,140,141,142,143,144]

  const Fblock = 
  [86,87,88,89,90,101,116,117,118,119,131,146]

  const Gblock =
  [150,151,152,153,154,165,180,182,183,184,195,199,210,211,212,213,214]
  
  const Hblock =
  [155,159,170,174,185,186,187,188,189,200,204,215,219]

  const IBlock =
  [161,162,163,164,165,178,193,208,221,222,223,224,225]
  
  const Jblock =
  [225,226,227,228,229,242,257,272,287,270,285,286]

  const Kblock =
  [230,233,234,245,247,260,261,275,277,290,293,294]

  const Lblock =
  [0,15,30,45,60,61,62,63,64]

  const Mblock =
  [300,301,303,304,315,316,317,318,319,330,332, 334,345,349,360,364]

  const Nblock =
  [305,309,320,321,324,335,337,339,350,353,354,365,369]

  const Oblock =
  [312,313,314,326,330,341,345,356,360,372,373,374]

  const Pblock =
  [0,1,2,3,4,15,19,30,34,45,31,32,33,60]

  const Qblock =
  [0,1,2,3,15,18,30,32,33,45,46,47,48,64]

  const Rblock =
  [0,1,2,3,15,18,30,31,32,33,45,60,47,63]

  const Sblock =
  [0,1,2,3,4,15,30,31,32,33,34,49,60,61,62,63,64]

  const Tblock =
  [0,1,2,3,4,17,32,47,62]

  const Ublock =
  [0,15,30,45,60,61,62,63,64,49,34,19,4]

  const Vblock =
  [0,15,30,46,62,48,34,19,4]

  const Wblock =
  [0,15,30,45,60,61,47,63,49,64,34,19,4]

  const Xblock =
  [0,16,32,48,64,4,18,46,60]

  const Yblock =
  [0,16,4,18,32,47,62]

  const Zblock =
  [0,1,2,3,4,18,32,46,60,61,62,63,64]


  const Blocks = [Ablock, Bblock, Cblock, Dblock,Eblock,Fblock,Gblock,Hblock,IBlock,Jblock,Kblock,Lblock,Mblock,Nblock,Oblock,Pblock,Qblock,Rblock,Sblock,Tblock,Ublock,Vblock,Wblock,Xblock,Yblock,Zblock]
  let currentPosition = 4
  
  let random = Math.floor(Math.random()*Blocks.length)

  let current = Blocks[random]


 function draw () {
   current.forEach(index => {
     squares [currentPosition + index].classList.add('blocks')
     
   })
 }
 function undraw() {
   current.forEach(index => {
     squares[currentPosition + index].classList.remove('blocks')
   })
 }

 timerID = setInterval(moveDown,750)

 function control(e) {
 if(e.keyCode === 37) {
   moveLeft()
 } else if(e.keyCode === 39){
   moveRight()
 } else if(e.keyCode === 40){
   moveDown()
 }
}
document.addEventListener('keyup',control)

 function moveDown() {
   undraw()
   currentPosition += width
   draw()
   freeze()
 }
 function freeze() {
   if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
     current.forEach(index=> squares[currentPosition + index].classList.add('taken'))
     random= nextRandom
     nextRandom = Math.floor(Math.random() * Blocks.length)
     current= Blocks[random]
     currentPosition = 4
     draw()
     displayBlock()

   }
 }

 function moveLeft() {
  undraw()
  const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)

  if(!isAtLeftEdge) currentPosition -=5
  
  if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
    currentPosition +=1
  }
 draw()
}

function moveRight() {
 undraw()
 const isAtRightEdge = current.some(index => (currentPosition + index) % width === width -1)

 if(!isAtRightEdge) currentPosition +=5

 if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
   currentPosition -=1
 }
 draw()
}

// Displaying which letter is coming next
const displaySquare = document.querySelectorAll('.miniGrid div')
const displayWidth = 5
let displayIndex = 0


const upNextBlocks = [
  [2,6,8,10,14,15,16,17,18,19,20,24],

  [0,1,2,3,5,9,10,11,12,13,14,15,19,20,21,22,23],
  
  [0,1,2,3,4,5,10,15,20,21,22,23,24],

  [0,1,2,3,5,9,10,15,19,20,21,22,23],
  
  [0,1,2,3,4,5,10,11,12,13,15,20,21,22,23,24],

  [0,1,2,3,4,5,10,11,12,13,15,20],

  [0,1,2,3,4,5,10,12,13,14,15,19,20,21,22,23,24],

  [0,4,5,9,10,11,12,13,14,15,19,20,24],

  [0,1,2,3,4,7,12,17,20,21,22,23,24],
  
  [0,1,2,3,4,7,12,17,22,21,20,15],

  [0,3,4,5,7,10,11,15,17,20,23,24],

  [0,5,10,15,20,21,22,23,24],

  [0,1,3,4,5,6,7,8,9,10,12,14,15,19,20,24],

  [0,4,5,6,9,10,12,14,15,18,19,20,24],

  [1,2,3,5,9,10,14,15,19,21,22,23],

  [0,1,2,3,4,5,9,10,11,12,13,14,15,20],

  [0,1,2,3,5,8,10,12,13,15,16,17,18,24],

  [0,1,2,3,5,8,10,11,12,13,15,17,20,23],

  [0,1,2,3,4,5,10,11,12,13,14,19,20,21,22,23,24],

  [0,1,2,3,4,7,12,17,22],

  [0,4,5,9,10,14,15,19,20,21,22,23,24]

  [00,4,5,9,10,14,16,18,22],

  [0,4,5,9,10,12,14,15,17,19,20,21,23,24],

  [0,4,6,8,12,14,16,20,24],

  [0,4,6,8,12,17,22],

  [0,1,2,3,4,8,12,16,20,21,22,23,24]
]

function displayBlock() {
  displaySquare.forEach(square => {
    square.classList.remove('blocks')
  })
  upNextBlocks[nextRandom]
}



startButton.addEventListener('click', () => {
  if  (timerID) {
    clearInterval(timerID)
    timerID = null }
  else {
    draw()
    timerID = setInterval(moveDown,750)
  nextRandom = Math.floor(Math.random()*Blocks.length)
  displayBlock()
  } })





} )