const WALL = document.querySelector(".wall");
const HOLE = document.querySelector(".hole");
const UFO = document.querySelector(".UFO");
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

function fallingUfo() {
    const curPosition = parseInt(window.getComputedStyle(UFO).getPropertyValue("top"));
    const changePosition = (curPosition + 2) + "px";
    UFO.style.top = changePosition;
    requestAnimationFrame(fallingUfo);
}
requestAnimationFrame(fallingUfo);


function moveUfoUp() {
    const curPosition = parseInt(window.getComputedStyle(UFO).top);
    UFO.style.top = (curPosition - 50) + "px";
}


function moveUfoDown() {
    const curPosition = parseInt(window.getComputedStyle(UFO).getPropertyValue("top"));
    UFO.style.top = (curPosition + 50) + "px";
}

document.addEventListener("keydown", (e) => {
    if(e.code == "ArrowUp" ){
        moveUfoUp()
    }else if(e.code == "ArrowDown"){
        moveUfoDown()
    }
})







