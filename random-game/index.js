const WALL = document.querySelector(".wall");
const HOLE = document.querySelector(".hole");
const scorePoint = document.querySelector(".scoreboard");

let score = 1;

WALL.addEventListener('animationiteration', () =>{
    holePosition()
    scorePoint.innerHTML = score;
    score++;
} );


function holePosition() {
    HOLE.style.top = -(Math.trunc(Math.random()*400) + 100) + "px" ;
}




