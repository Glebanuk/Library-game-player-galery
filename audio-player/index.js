let currentSong = 0;

const music = document.getElementById("audio");

const disk =document.querySelector(".disk");
const artist = document.querySelector(".Artist");
const name = document.querySelector(".song-name");

const seekBar = document.querySelector(".seek-bar");
const current = document.querySelector(".current-time");
const duration = document.querySelector(".duration-time");

const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");
const playBtn = document.querySelector(".btn-play");

const volumeSeek = document.querySelector(".seek-bar-volume");
const volumeBtn = document.querySelector(".volume-btn");



playBtn.addEventListener("click", () => {
    playBtn.classList.toggle("pause");
    disk.classList.toggle("rotate");
})


