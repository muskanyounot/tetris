document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  let squares = Array.from(document.querySelectorAll('.grid div'))
  const ScoreDisplay = document.getElementById("score")
  const startButton = document.getElementById("startButton")
  const width = 72
  let nextRandom = 0



  const Ablock = 
  [ 0,   1,   2,   3,   4,   5,   6,   7,   8,
    72,  80, 144, 148, 152, 216, 219, 221, 224,
   288, 290, 294, 296, 360, 362, 363, 364, 365,
   366, 368, 432, 434, 438, 440, 504, 512, 576,
   577, 578, 579, 580, 581, 582, 583, 584]  

 const Bblock =
  [64,65,66,67,68,69,70,71,72,136,144,208,210,211,212,213,216,280,282,286,288,352,354,355,356,357,360,424,426,430,432,496,498,499,500,501,504,568,576,640,641,642,643,644,646,647,648]

  const Cblock = 
  [64,65,66,67,68,699,70,71,72,136,144,208,210,211,212,213,214,216,280,282,288,352,354,360,424,426,432,496,498,499,500,501,502,504,568,576,640,641,642,643,644,645,646,647,648]

  const Dblock =
  [11,12,13,14,15,16,17,18,82,90,154,156,157,158,159,162,226,228,232,234,298,300,304,306,370,372,375,378,442,444,445,446,450,514,522,586,587,588,589,590,591,592,593]

  const Eblock =
  [28,29,30,31,32,33,34,35,36,100,108,172,174,175,176,177,178,180,244,246,252,316,318,319,320,321,324,388,390,396,460,462,463,464,465,466,468,532,540,604,605,606,607,608,609,610,611,612]

  const Fblock = 
  [10,11,12,13,14,15,16,17,18,82,90,154,156,157,158,159,160,162,226,228,234,298,300,301,302,303,306,370,372,378,442,444,450,514,522,586,587,588,589,590,591,592,593,594]

  const Gblock =
  [1,2,3,4,5,6,7,8,9,73,81,145,147,148,149,150,151,153,217,219,225,289,291,293,294,295,297,361,363,367,369,433,435,436,437,438,439,441,505,513,577,578,579,580,581,582,583,584,585]

  const Hblock =
  [19,20,21,22,23,24,25,26,27,91,99,163,165,169,171,235,347,241,243,307,309,310,311,312,313,315,379,381,385,387,451,453,457,459,523,531,595,596,597,598,599,600,601,602,603]

  const IBlock =
  [55,56,57,58,59,60,61,62,63,127,135,199,201,202,203,204,205,207,271,275,279,343,347,351,415,419,423,487,489,490,491,492,493,495,559,567,631,632,633,634,635,636,637,638,639]

  const Jblock =
  [55,56,57,58,59,60,61,62,63,127,135,199,201,202,203,204,205,207,271,275,279,343,347,351,415,417,419,423,487,489,490,491,495,559,567,631,632,633,634,635,636,637,638,639]

  const Kblock =
  [1,2,3,4,5,6,7,8,9,73,81,145,147,151,153,217,219,222,225,289,291,292,293,297,361,363,366,369,433,435,439,441,505,513,577,578,579,580,581,582,583,584,585]

  const Lblock =
  [46,47,48,49,50,51,52,53,54,118,126,190,192,198,262,264,270,334,336,342,406,408,414,478,480,481,482,483,484,486,550,558,622,623,624,625,626,627,628,629]

  const Mblock =
  [28,29,30,31,32,33,34,35,36,100,108,172,174,178,180,244246,247,249,250,252,316,318,320,322,324,388,390,394,396,460,462,466,468,532,540,604,605,607,608,609,610,611,612]

  const Nblock =
  [28, 29, 30, 31, 32, 33, 34, 35, 36, 100, 108, 172, 174, 178, 180, 244, 246, 247, 250, 252, 316, 318,320, 322, 324, 388, 390, 393, 394, 396, 460, 462, 466, 468, 532, 540, 604, 605, 606, 607, 608, 609, 610, 611, 612]

  const Oblock =
  [37, 38, 39, 40, 41, 42, 43, 44, 45,109, 181, 253, 325, 397, 469, 541, 613, 614, 615, 616, 617, 618, 619, 620, 621, 117, 189, 261, 333, 405, 477, 549, 184,	185, 186, 255, 327, 399, 472, 473, 474, 259, 331, 403]

  const Pblock =
  [46, 47, 48, 49, 50, 51, 52, 53, 54, 622, 623, 624, 625, 626, 627, 628, 629,630, 118, 190, 262, 334, 406, 478, 550, 126, 198, 270, 342, 414, 486, 558,192, 193, 194, 195, 196, 264, 336, 408, 480, 337, 338, 339, 340, 268]

  const Qblock =
  [19, 20, 21, 22, 23, 24, 25, 26, 27, 165, 166, 167, 168, 453, 454, 455, 456, 457, 595, 596, 597, 598, 599, 600, 601, 602, 603, 91, 163, 235, 307, 379, 451, 523, 99, 171, 243, 315, 387, 459, 531, 237, 309, 381, 240, 312, 384]

  const Rblock =
  [46, 47, 48, 49, 50, 51, 52, 53, 54, 622, 623, 624, 625, 626, 627, 628, 629, 630, 192, 193, 194, 195, 336, 337, 338, 339, 264, 408, 480, 411, 484, 268,118, 190, 262, 334, 406, 478, 550, 126, 198, 270, 342, 414, 486, 558]

  const Sblock =
  [37, 38, 39, 40, 41, 42, 43, 44, 45, 613, 614, 615, 616, 617, 618, 619, 620,621, 183, 184, 185, 186, 187, 327, 328, 329, 330, 331, 471, 472, 473, 474,475, 255, 403, 117, 189, 261, 333, 405, 477, 549, 109, 181, 253, 325, 397,469, 541]

  const Tblock =
  [37, 38, 39, 40, 41, 42, 43, 44, 45, 613, 614, 615, 616, 617, 618, 619, 620, 621, 183, 184, 185, 186, 187, 109, 181, 253, 325, 397, 469, 541, 117, 189,261, 333, 405, 477, 549, 257, 329, 401, 473]

  const Ublock =
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 435, 436, 437, 438, 439, 577, 578, 579, 580, 581,582, 583, 584, 585, 73, 145, 217, 289, 361, 433, 505, 81, 153, 225, 297, 369,441, 513, 147, 219, 291, 363, 151, 223, 295, 367]

  const Vblock =
  [64, 65, 66, 67, 68, 69, 70, 71, 72, 640, 641, 642, 643, 644, 645, 646, 647, 648, 136, 208, 280, 352, 424, 496, 568, 144, 216, 288, 360, 432, 504, 576,210, 282, 354, 214, 286, 358, 427, 429, 500]

  const Wblock =
  [10, 11, 12, 13, 14, 15, 16, 17, 18, 586, 587, 588, 589, 590, 591, 592, 593,594, 82, 154, 226, 298, 370, 442, 514, 156, 228, 300, 372, 444, 160, 232, 304, 376, 448, 90, 162, 234, 306, 378, 450, 522, 302, 373, 375]

  const Xblock =
  [19, 20, 21, 22, 23, 24, 25, 26, 27, 595, 596, 597, 598, 599, 600, 601, 602,603, 91, 163, 235, 307, 379, 451, 523, 99, 171, 243, 315, 387, 459, 531, 165,169, 238, 240, 311, 382, 384, 453, 457]

  const Yblock =
  [55,56,57,58,59,60,61,62,63,127,135,199,201,205,207,271,274,276,279,343,347,351,415,419,423,487,491,495,559,567,631,632,634,635,636,637,638,639]

  const Zblock =
  [11,12,13,14,15,16,17,18,82,90,154,156,157,158,159,160,162,226,231,234,298,302,306,370,373,378,442,444,445,446,447,448,450,514,522,586,587,588,589,590,591,592,593,594]

const Blocks = [Ablock, Bblock, Cblock, Dblock, Eblock, Fblock, Gblock, Hblock, IBlock, Jblock, Kblock, Lblock, Mblock, Nblock, Oblock, Pblock, Qblock,Rblock, Sblock, Tblock, Ublock, Vblock, Wblock, Xblock, Yblock,Zblock]


  const newABlock = Ablock.map(i =>i -1 )
  const newBBlock = Bblock.map(i =>i -1 )
  const newCBlock = Cblock.map(i =>i -1 )
  const newDBlock = Dblock.map(i =>i -1 )
  const newEBlock = Eblock.map(i =>i -1 )
  const newFBlock = Fblock.map(i =>i -1 )
  const newGBlock = Gblock.map(i =>i -1 )
  const newHBlock = Hblock.map(i =>i -1 )
  const newIBlock = IBlock.map(i =>i -1 )
  const newJBlock = Jblock.map(i =>i -1 )
  const newKBlock = Kblock.map(i =>i -1 )
  const newLBlock = Lblock.map(i =>i -1 )
  const newMBlock = Mblock.map(i =>i -1 )
  const newNBlock = Nblock.map(i =>i -1 )
  const newOBlock = Oblock.map(i =>i -1 )
  const newPBlock = Pblock.map(i =>i -1 )
  const newQBlock = Qblock.map(i =>i -1 )
  const newRBlock = Rblock.map(i =>i -1 )
  const newSBlock = Sblock.map(i =>i -1 )
  const newTBlock = Tblock.map(i =>i -1 )
  const newUBlock = Ublock.map(i =>i -1 )
  const newVBlock = Vblock.map(i =>i -1 )
  const newWBlock = Wblock.map(i =>i -1 )
  const newXBlock = Xblock.map(i =>i -1 )
  const newYBlock = Yblock.map(i =>i -1 )
  const newZBlock = Ablock.map(i =>i -1 ) 
console.log(newABlock)

//const Blocks = [newABlock, newBBlock, newCBlock, newDBlock, newEBlock, newFBlock, newGBlock, newHBlock, newIBlock, newJBlock, newKBlock, newLBlock,newMBlock, newNBlock, newOBlock, newPBlock, newQBlock, newRBlock, newSBlock, newTBlock, newUBlock, newVBlock, newWBlock, newXBlock, newYBlock,newZBlock]




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

 timerID = setInterval(moveDown,1000)

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
     currentPosition = 0
     draw()
     displayBlock()

   }
 }

 function moveLeft() {
  undraw()
  const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)

  if(!isAtLeftEdge) currentPosition -=9

  if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
    currentPosition +=1
  }
 draw()
}

function moveRight() {
 undraw()
 const isAtRightEdge = current.some(index => (currentPosition + index) % width === width -1)

 if(!isAtRightEdge) currentPosition +=9

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

  function addScore() {
    for (let i=0; i < 5832; i +=width) {
      const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9, i+10, i+11, i+12, i+13, i+14, i+15, i+16, i+17, i+18, i+19, i+20, i+21, i+22, i+23, i+24, i+25, i+26, i+27, i+28, i+29, i+30, i+31, i+32, i+33, i+34, i+35, i+36, i+37, i+38, i+39, i+40, i+41, i+42, i+43, i+44, i+45, i+46, i+48, i+49, i+50, i+51, i+52, i+53, i+54, i+55, i+56, i+57, i+58, i+59, i+60, i+61, i+62, i+63, i+64, i+65, i+66, i+67, i+68, i+69, i+70, i+72, i+72]

      if(row.every(index => squares[index].classList.contains('taken'))) {
        score +=10
        ScoreDisplay.innerHTML = score
        row.forEach(index => {
          squares[index].classList.remove('taken')
        })
        const squaresRemoved = square.splice(i, width)
        console.log(squaresRemoved)
      }
    }
  }





} ) 
