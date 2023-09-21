let currentSong = 0;

const music = document.getElementById("audio");

const disk =document.querySelector(".disk");
const artist = document.querySelector(".Artist");
const songName = document.querySelector(".song-name");

const seekBar = document.querySelector(".seek-bar");
const current = document.querySelector(".current-time");
const duration = document.querySelector(".duration-time");

const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");
const playBtn = document.querySelector(".btn-play");

const volumeSeek = document.querySelector(".seek-bar-volume");
const volumeBtn = document.querySelector(".volume-btn");



playBtn.addEventListener("click", () => {
    // setMusic();
    playBtn.classList.toggle("pause");
    disk.classList.toggle("rotate");
})



function setMusic (i) {
    seekBar.value = 0;
    let song = songs[i];

    currentSong = i;
    music.src = song.path;

    songName.innerHTML = song.name;
    artist.innerHTML = song.artist;
    disk.style.background = `url(${song["img-cover"]})`;

    current.innerHTML = "00:00";

    music.addEventListener("loadedmetadata", function() {
        seekBar.max = music.duration;
        duration.innerHTML = formatTime(music.duration);
        
    })
    // setTimeout(() => {
    //     seekBar.max = music.duration;
    //     console.log(music.duration)

    // }, 300)

}

// formating time

setMusic(0);

const formatTime = (time)  =>{
    let min = Math.floor(time / 60);

    if(min < 10){
        min = `0${min}`;

    }

    let sec = Math.floor(time % 60);
    if(sec < 10){
        sec = `0${sec}`
    }
    
    return `${min} : ${sec}`

}