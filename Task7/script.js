const mazeMatrix = [
    ['1','1','1','1','1','1','1','1','1','1'],
    ['1','0','0','0','0','0','0','0','0','1'],
    ['1','0','1','1','0','1','1','1','0','1'],
    ['1','0','1','0','0','1','0','0','0','1'],
    ['1','0','1','0','1','1','0','1','1','1'],
    ['1','0','1','0','0','0','0','0','0','1'],
    ['1','0','1','1','1','1','1','1','0','1'],
    ['1','0','0','0','0','0','0','0','0','1'],
    ['1','1','1','1','1','1','1','1','F','1'],
    ['1','1','1','1','1','1','1','1','1','1'],
];
  
  
const player = {
    x: null,
    y: null
};

const gameBoard = document.getElementById('game');

function buildBoard(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const square = document.createElement('div');
      square.classList.add('square');
      if (matrix[i][j] === '1') {
        square.classList.add('wall');
      } else if (matrix[i][j] === 'P') {
        square.classList.add('start');
        player.x = j;
        player.y = i;
      } else if (matrix[i][j] === 'F') {
        square.classList.add('finish');
      }
      square.style.top = i * 40 + 'px';
      square.style.left = j * 40 + 'px';
      gameBoard.appendChild(square);
    }
  }
}

function movePlayer(event) {
    let x = player.x;
    let y = player.y;
    switch (event.keyCode) {
      case 37: //left
        x--;
        break;
      case 38: //up
        y--;
        break;
      case 39: //right
        x++;
        break;
      case 40: //down
        y++;
        break
    }
}