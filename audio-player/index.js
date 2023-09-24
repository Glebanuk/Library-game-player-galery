let currentSong = 0;

const music = document.getElementById("audio");


const player =document.querySelector(".player");
const bgImg = document.querySelector('.bg-image');


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


playBtn.classList.add("pause");

playBtn.addEventListener("click", () => {
    if(playBtn.className.includes("pause")){
        music.play()
    }else{
        music.pause()
    }
    playBtn.classList.toggle("pause");
    disk.classList.toggle("rotate");
})

nextBtn.addEventListener("click", () =>{
    if(currentSong >= songs.length -1){
        currentSong = 0;
    }else{
        currentSong++;
    }
    setMusic (currentSong);
    playBtn.click();
})



prevBtn.addEventListener("click", () =>{
    if(currentSong <= songs.length -1){
        currentSong--;
    };
    setMusic (currentSong);
    playBtn.click();
})


function setMusic (i) {
    seekBar.value = 0;
    let song = songs[i];

    currentSong = i;
    music.src = song.path;

    songName.innerHTML = song.name;
    artist.innerHTML = song.artist;
    disk.style.background = `url(${song["img-cover"]})`;
    bgImg.style.backgroundImage = `url(${song["img-cover"]})`;
    player.style.background = `url(${song["img-cover"]})`;
    

    current.innerHTML = "00:00";

    music.addEventListener("loadedmetadata", function() {
        seekBar.max = music.duration;
        duration.innerHTML = formatTime(music.duration);
        
    })
}


setMusic(0);

// formating time
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
// seekBar

music.addEventListener("timeupdate", function() { // устанавливает положение ползунка от прогресса воспроиведения аудио
    seekBar.value = music.currentTime;
    current.textContent = formatTime(music.currentTime);
});

seekBar.addEventListener("input", function() { // переключает на нужный отрезок времени при сдвиге ползунка
    music.currentTime = seekBar.value;
});