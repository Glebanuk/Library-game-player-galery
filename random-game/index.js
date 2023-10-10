const WALL = document.querySelector(".wall");
const HOLE = document.querySelector(".hole");
const UFO = document.querySelector(".UFO");

const scorePoint = document.querySelector(".scoreboard");
const bestScore = document.querySelector(".best-score");
const lastScore = document.querySelector(".last-score");



const startWindow = document.querySelector(".game-start");
const gameEnd = document.querySelector(".game-end");


let score = 0;
let jumps = 0;



function gamePaused(){
    HOLE.style.animationName = "none";
    WALL.style.animationName = "none";
    UFO.style.display = "none";
     UFO.style.top = "100px";
    scorePoint.innerHTML = 0;
}
gamePaused()

function startGame(){
    startWindow.classList.add("close-start");
    UFO.style.display = "block";
    HOLE.style.animationName = "wallMove";
    WALL.style.animationName = "wallMove";
    gameEnd.classList.remove("open-end");
    score = 0;
    ufoFall()
    
}

document.addEventListener("keydown", (e) => {
    if(e.key == "Enter" && UFO.style.display == "none" ){
        startGame()
    }
})

function setBestScore(score){
    localStorage.setItem("bestScore", score);
    bestScore.innerHTML =`Best result: ${score}`;
}

function getBestScore(){
    return localStorage.getItem("bestScore") || 0;

}

HOLE.addEventListener("animationiteration", holePosition)

function holePosition() {
    HOLE.style.top = -((Math.random() * 400) + 100)  + "px" ;
    score++;
    scorePoint.innerHTML = score;

    const currentBestScore = getBestScore();

    if(score > currentBestScore){
        setBestScore(score)
    }
    

}


let ufoFallInterval;

function ufoFall() {
    if (ufoFallInterval) {
        clearInterval(ufoFallInterval); 
    }

    ufoFallInterval = setInterval(function() {

        let curUfoPosition = parseInt(window.getComputedStyle(UFO).getPropertyValue("top"));

        if (UFO.style.display === "block") {
            UFO.style.top = (curUfoPosition + 2) + "px";
        }

        let curWallPosition = parseInt(window.getComputedStyle(WALL).getPropertyValue("left"));
        let curHolePosition = parseInt(window.getComputedStyle(HOLE).getPropertyValue("top"));
        let hTope = (500 + curHolePosition);

        if (
            (curUfoPosition > 460) ||
            (curUfoPosition < 10) ||
            (
                (curWallPosition < 50) &&
                (curWallPosition > -50) &&
                (
                    (curUfoPosition < hTope) || (curUfoPosition > hTope + 100)
                )
            )
        ) {
            gameEnd.classList.add("open-end");
            lastScore.innerHTML = `Score: ${score}`;
            gamePaused();

        }
    }, 10);
}


document.addEventListener("keydown", (e) =>{
    let curUfoPosition = parseInt(window.getComputedStyle(UFO).getPropertyValue("top"));
   
    if(e.key == "ArrowUp"){
        UFO.style.top = (curUfoPosition - 30) + "px";
    } else if (e.key == "ArrowDown"){
        UFO.style.top = (curUfoPosition + 30) + "px";
    }
})




    





































// start game---------------------

// document.addEventListener("keydown", (e) =>{

//     if(e.code == "Space" ){
//         startWindow.classList.add("close-start");
//         HOLE.style.animationPlayState = "running";
//         WALL.style.animationPlayState = "running";
//         // isAnimationRun = true;
//         gameEnd.classList.remove("open-end")
//         requestAnimationFrame(fallingUfo);
//     }
// })

// WALL.addEventListener('animationiteration', () =>{
//     holePosition()
//     scorePoint.innerHTML = score;
//     score++;
// } );





// function fallingUfo() {
    
//      curUfoPosition = parseInt(window.getComputedStyle(UFO).getPropertyValue("top"));
//     const changePosition = (curUfoPosition + 2) + "px";
//     UFO.style.top = changePosition;

//     if(!gameOver()){
//         requestAnimationFrame(fallingUfo);
//     }
// }

// function moveUfoUp() {
//     curUfoPosition = parseInt(window.getComputedStyle(UFO).top);
//     UFO.style.top = (curUfoPosition - 30) + "px";
// }

// function moveUfoDown() {
//      curUfoPosition = parseInt(window.getComputedStyle(UFO).getPropertyValue("top")); 
//     UFO.style.top = (curUfoPosition + 30) + "px";
    
// }

// document.addEventListener("keydown", (e) => {
//     if(e.code == "ArrowUp" ){
//         moveUfoUp()
//     }else if(e.code == "ArrowDown"){
//         moveUfoDown()
//     }
// })

// // end-game-------------
// function gameOver() {

// let curUfoPosition = parseInt(window.getComputedStyle(UFO).getPropertyValue("top"));
// let curHolePosition = parseInt(window.getComputedStyle(HOLE).getPropertyValue("top"));
// let curWallPosition = parseInt(window.getComputedStyle(WALL).getPropertyValue("left"));

// // console.log("UFO:", curUfoPosition, "HOLE:", curHolePosition, "WALL:", curWallPosition);
//    if(
//         curUfoPosition > 465 || 
//         curUfoPosition < -10 || 

//         (
//             curWallPosition < 50 &&
//             curWallPosition > -50
//             &&
//             curUfoPosition < curHolePosition &&
//             curUfoPosition > curHolePosition + 100
//         )
//     ){
//         gameEnd.classList.add("open-end")
//         HOLE.style.animationPlayState = "paused";
//         WALL.style.animationPlayState = "paused";
//         UFO.style.top = "100px";
        
//         console.log(isAnimationRun)
//         return true
//     }
//     return false
// }


// let fall = setInterval(function testWall(){
//     let wallLeft = parseInt(window.getComputedStyle(WALL).left);
//     let ufoTop = parseInt(window.getComputedStyle(UFO).top);
//     let holeTop = parseInt(window.getComputedStyle(HOLE).top);
//     if((ufoTop > 450) || ((wallLeft < 50) && (wallLeft > -50) && (ufoTop < holeTop) ||(ufoTop > holeTop + 100))){
//         do something
//     }
// },10)


