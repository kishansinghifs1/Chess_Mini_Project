const gameBoard = document.querySelector('#gameBoard');
const playerDisplay = document.querySelector('#player');
const infodisplay = document.querySelector('#info-display');
const width = 8;
const startPieces = [
    rook , knight , bishop ,queen, king ,bishop , knight , rook ,
    pawn , pawn , pawn , pawn , pawn , pawn , pawn , pawn ,
    ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 
    ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 
    ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 
    ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 
    pawn , pawn , pawn , pawn , pawn , pawn , pawn , pawn ,
    rook , knight , bishop ,queen, king ,bishop , knight , rook 
]
function createBoard() {
    startPieces.forEach((startPiece, i) => {
      const square = document.createElement('div')
      square.classList.add('square')
      square.setAttribute('square-id', i)
      if (startPiece) {
        const pieceElement = document.createElement('div'); 
        pieceElement.innerHTML = startPiece;
        pieceElement.setAttribute('draggable', true); 
        square.appendChild(pieceElement); 
    }
      const row = Math.floor((63 -i)/8)+1
      if(row%2 === 0){
        square.classList.add(i%2 === 0 ? "beige" : "brown")
      }else{
        square.classList.add(i%2 === 0 ? "brown" : "beige")
      }
      if( i <= 15){
         square.firstChild.firstChild.classList.add('black')
      }
      if( i >= 48){
        square.firstChild.firstChild.classList.add('white')
      }
      gameBoard.append(square)
    })
  }
createBoard()
const allSquares = document.querySelectorAll("#gameBoard .square")
console.log(allSquares)
allSquares.forEach(square => {
  square.addEventListener('dragstart', dragStart)
  square.addEventListener('dragover', dragOver)
})
let startPostitionId
let draggedElement
function dragStart (e) {
  startPostitionId = e.target.parentNode.getAttribute('square-id')
  draggedElement = e.target
}
function dragOver (e) {
  e.preventDefault()
}