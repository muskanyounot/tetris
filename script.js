document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  let squares = Array.from(document.querySelectorAll('.grid div'))
  const ScoreDisplay = document.getElementById("score")
  const startButton = document.getElementById("startButton")
  const width = 72
  let nextRandom = 0
  let score = 0



  const Ablock = 
  [ 0,   1,   2,   3,   4,   5,   6,   7,   8,
    72,  80, 144, 148, 152, 216, 219, 221, 224,
   288, 290, 294, 296, 360, 362, 363, 364, 365,
   366, 368, 432, 434, 438, 440, 504, 512, 576,
   577, 578, 579, 580, 581, 582, 583, 584]  

 const Bblock =
  [63, 64, 65, 66, 67, 68, 69, 70, 71, 135, 143, 207, 209, 210, 211, 212, 215, 279, 281, 285, 287, 351, 353, 354, 355, 356, 359, 423, 425, 429, 431, 495, 497, 498, 499, 500, 503, 567, 575, 639, 640, 641, 642, 643,644, 645, 646, 647]

  const Cblock = 
  [63, 64, 65, 66, 67, 68, 69, 70, 71, 135, 143, 207, 209, 210, 211, 212, 213, 215, 279, 281, 287, 351, 353, 359, 423, 425, 431, 495, 497, 498, 499, 500, 501, 503, 567, 575, 639, 640, 641, 642, 643, 644, 645, 646, 647]

  const Dblock =
  [9,10, 11, 12, 13, 14, 15, 16, 17, 81, 89, 153, 155, 156, 157, 158, 161, 225, 227, 231, 233, 297, 299, 303, 305, 369, 371, 374, 377, 441, 443, 444, 445, 449, 513, 521, 585, 586, 587, 588, 589, 590, 591, 592,593]

  const Eblock =
  [27, 28, 29, 30, 31, 32, 33, 34, 35, 99, 107, 171, 173, 174, 175, 176, 177, 179, 243, 245, 251, 315, 317, 318, 319, 320, 323, 387, 389, 395, 459, 461, 462, 463, 464, 465, 467, 531, 539, 603, 604, 605, 606, 607, 608, 609, 610, 611]

  const Fblock = 
  [9, 10, 11, 12, 13, 14, 15, 16, 17, 81, 89, 153, 155, 156, 157, 158, 159, 161, 225, 227, 233, 297, 299, 300, 301, 302, 305, 369, 371, 377, 441, 443, 449, 513, 521, 585, 586, 587, 588, 589, 590, 591, 592, 593]

  const Gblock =
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 72, 80, 144, 146, 147, 148, 149, 150, 152, 216, 218, 224, 288, 290, 292, 293, 294, 296, 360, 362, 366, 368, 432, 434, 435, 436, 437, 438, 440, 504, 512, 576, 577, 578, 579, 580, 581, 582, 583, 584]

  const Hblock =
  [18, 19, 20, 21, 22, 23, 24, 25, 26, 90, 98, 162, 164, 168, 170, 234, 246, 240, 242, 306, 308, 309, 310, 311, 312, 314, 378, 380, 384, 386, 450, 452, 456, 458, 522, 530, 594, 595, 596, 597, 598, 599, 600, 601, 602]

  const IBlock =
  [54, 55, 56, 57, 58, 59, 60, 61, 62, 126, 134, 198, 200, 201, 202, 203, 204, 206, 270, 274, 278, 342, 346, 350, 414, 418, 422, 486, 488, 489, 490, 491, 492, 494, 558, 566, 630, 631, 632, 633, 634, 635, 636, 637, 638]

  const Jblock =
  [54, 55, 56, 57, 58, 59, 60, 61, 62, 126, 134, 198, 200, 201, 202, 203, 204, 206, 270, 274, 278, 342, 346, 350, 414, 416, 418, 422, 486, 488, 489, 490, 494, 558, 566, 630, 631, 632, 633, 634, 635, 636, 637, 638]

  const Kblock =
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 72, 80, 144, 146, 150, 152, 216, 218, 221, 224, 288, 290, 291, 292, 296, 360, 362, 365, 368, 432, 434, 438, 440, 504, 512, 576, 577, 578, 579, 580, 581, 582, 583, 584,]

  const Lblock =
  [45, 46, 47, 48, 49, 50, 51, 52, 53, 117, 125, 189, 191, 197, 261, 263, 269, 333, 335, 341, 405, 407, 413, 477, 479, 480, 481, 482, 483, 485, 549, 557, 621, 622, 623, 624, 625, 626, 627, 628, 629]

  const Mblock =
  [26, 27, 28, 29, 30, 31, 32, 33, 34, 98, 106, 170, 172, 176, 178, 244244, 245, 247, 248, 250, 314, 316, 318, 320, 322, 386, 388, 392, 394, 458, 460, 464, 466, 530, 538, 602, 603, 605, 606, 607, 608, 609, 610]
  const Nblock =
  [27, 28, 29, 30, 31, 32, 33, 34, 35, 99, 107, 171, 173, 177, 179, 243, 245, 246, 249, 251, 315, 317, 319, 321, 323, 387, 389, 392, 393, 395, 459, 461, 465, 467, 531, 539, 603, 604, 605, 606, 607, 608, 609, 610, 611]

  const Oblock =
  [36, 37, 38, 39, 40, 41, 42, 43, 44, 108, 180, 252, 324, 396, 468, 540, 612, 613, 614, 615, 616, 617, 618, 619, 620, 116, 188, 260, 332, 404, 476, 548, 183, 184, 185, 254, 326, 398, 471, 472, 473, 258, 330, 402]

  const Pblock =
  [45, 46, 47, 48, 49, 50, 51, 52, 53, 621, 622, 623, 624, 625, 626, 627, 628, 629, 117, 189, 261, 333, 405, 477, 549, 125, 197, 269, 341, 413, 485, 557, 191, 192, 193, 194, 195, 263, 335, 407, 479, 336, 337, 338, 339, 267]

  const Qblock =
  [18, 19, 20, 21, 22, 23, 24, 25, 26, 164, 165, 166, 167, 452, 453, 454, 455, 456, 594, 595, 596, 597, 598, 599, 600, 601, 602, 90, 162, 234, 306, 378, 450, 522, 98, 170, 242, 314, 386, 458, 530, 236, 308, 380, 239, 311, 383]

  const Rblock =
  [45, 46, 47, 48, 49, 50, 51, 52, 53, 621, 622, 623, 624, 625, 626, 627, 628, 629, 191, 192, 193, 194, 335, 336, 337, 338, 263, 407, 479, 410, 483, 267, 117, 189, 261, 333, 405, 477, 549, 125, 197, 269, 341, 413, 485, 557]

  const Sblock =
  [36, 37, 38, 39, 40, 41, 42, 43, 44, 612, 613, 614, 615, 616, 617, 618, 619, 620, 182, 183, 184, 185, 186, 326, 327, 328, 329, 330, 470, 471, 472, 473, 474, 254, 402, 116, 188, 260, 332, 404, 476, 548, 108, 180, 252, 324, 396, 468, 540]

  const Tblock =
  [36, 37, 38, 39, 40, 41, 42, 43, 44, 612, 613, 614, 615, 616, 617, 618, 619, 620, 182, 183, 184, 185, 186, 108, 180, 252, 324, 396, 468, 540, 116, 188, 260, 332, 404, 476, 548, 256, 328, 400, 472]

  const Ublock =
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 434, 435, 436, 437, 438, 576, 577, 578, 579, 580, 581, 582, 583, 584, 72, 144, 216, 288, 360, 432, 504, 80, 152, 224, 296, 368, 440, 512, 146, 218, 290, 362, 150, 222, 294, 366]

  const Vblock =
  [63, 64, 65, 66, 67, 68, 69, 70, 71, 639, 640, 641, 642, 643, 644, 645, 646, 647, 135, 207, 279, 351, 423, 495, 567, 143, 215, 287, 359, 431, 503, 575, 209, 281, 353, 213, 285, 357, 426, 428, 499]

  const Wblock =
  [9, 10, 11, 12, 13, 14, 15, 16, 17, 585, 586, 587, 588, 589, 590, 591, 592, 593, 81, 153, 225, 297, 369, 441, 513, 155, 227, 299, 371, 443, 159, 231, 303, 375, 447, 89, 161, 233, 305, 377, 449, 521, 301, 372, 374]

  const Xblock =
  [18, 19, 20, 21, 22, 23, 24, 25, 26, 594, 595, 596, 597, 598, 599, 600, 601, 602, 90, 162, 234, 306, 378, 450, 522, 98, 170, 242, 314, 386, 458, 530, 164, 168, 237, 239, 310, 381, 383, 452, 456]

  const Yblock =
  [54, 55, 56, 57, 58, 59, 60, 61, 62, 126, 134, 198, 200, 204, 206, 270, 273, 275, 278, 342, 346, 350, 414, 418, 422, 486, 490, 494, 558, 566, 630, 631,632, 633, 634, 635, 636, 637, 638]

  const Zblock =
  [9,10, 11, 12, 13, 14, 15, 16, 17, 81, 89, 153, 155, 156, 157, 158, 159, 161, 225, 230, 233, 297, 301, 305, 369, 372, 377, 441, 443, 444, 445, 446, 447, 449, 513, 521, 585, 586, 587, 588, 589, 590, 591, 592, 593]

const Blocks = [Ablock, Bblock, Cblock, Dblock, Eblock, Fblock, Gblock, Hblock, IBlock, Jblock, Kblock, Lblock, Mblock, Nblock, Oblock, Pblock, Qblock,Rblock, Sblock, Tblock, Ublock, Vblock, Wblock, Xblock, Yblock,Zblock]



  let currentPosition = 0

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
  currentPosition += width*4;
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
    addScore()
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
      const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9, i+10, i+11, i+12, i+13, i+14, i+15, i+16, i+17, i+18, i+19, i+20, i+21, i+22, i+23, i+24, i+25, i+26, i+27, i+28, i+29, i+30, i+31, i+32, i+33, i+34, i+35, i+36, i+37, i+38, i+39, i+40, i+41, i+42, i+43, i+44, i+45, i+46, i+47, i+48, i+49, i+50, i+51, i+52, i+53, i+54, i+55, i+56, i+57, i+58, i+59, i+60, i+61, i+62, i+63, i+64, i+65, i+66, i+67, i+68, i+69, i+70, i+71]

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
