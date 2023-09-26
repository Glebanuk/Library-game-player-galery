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

    // if (currentSong === 0) {
    //     prevBtn.setAttribute("disabled", "disabled");
    // } else {
    //     prevBtn.removeAttribute("disabled");
    // }
    setMusic (currentSong);

    playBtn.click();
    
})



prevBtn.addEventListener("click", () => {
    if (currentSong > 0) {
        currentSong--;
    }else{
        currentSong = songs.length - 1;
    }

    

    setMusic(currentSong);
    playBtn.click();
});




function setMusic (i) {
    seekBar.value = 0;
    let song = songs[i]; // переменная массива

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

//seekBar volume
volumeSeek.addEventListener("input", function() {
    music.volume = volumeSeek.value / 100;

})

let volume = false;
volumeBtn.addEventListener("click", () =>{

    if(volume){
    volumeSeek.value = 100;
    music.volume = 1.0;
    volume = false;
    volumeBtn.innerHTML= `<svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.59974 1.72038L3.28281 4.49993H0.625C0.279687 4.49993 0 4.83554 0 5.2499V9.74969C0 10.1637 0.279687 10.4997 0.625 10.4997H3.28281L5.59974 13.2792C5.99115 13.7489 6.66667 13.4189 6.66667 12.7489V2.25066C6.66667 1.58007 5.99062 1.25134 5.59974 1.72038ZM11.6758 0.124201C11.3849 -0.10485 10.994 -0.00829226 10.8031 0.341379C10.612 0.690425 10.6932 1.15947 10.9841 1.38852C12.7099 2.74752 13.7398 5.0321 13.7398 7.50011C13.7398 9.96811 12.7099 12.2527 10.9841 13.6117C10.6932 13.8404 10.612 14.3098 10.8031 14.6585C10.9865 14.9932 11.3742 15.1135 11.6758 14.8757C13.757 13.2364 15 10.4787 15 7.49979C15 4.52087 13.757 1.7635 11.6758 0.124201ZM12.5 7.49979C12.5 5.51457 11.6651 3.68935 10.2664 2.61752C9.975 2.39441 9.58854 2.49815 9.40391 2.85064C9.21927 3.20312 9.30547 3.66966 9.59687 3.89309C10.632 4.68649 11.25 6.03455 11.25 7.49979C11.25 8.96504 10.632 10.3131 9.59687 11.1065C9.30547 11.3296 9.21927 11.7962 9.40391 12.1489C9.57344 12.4727 9.95391 12.6221 10.2664 12.3821C11.6651 11.3102 12.5 9.48532 12.5 7.49979ZM8.80807 5.09772C8.50651 4.89991 8.12604 5.03022 7.95885 5.39302C7.79245 5.75581 7.9026 6.21173 8.20495 6.41203C8.54115 6.63358 8.75 7.05075 8.75 7.49979C8.75 7.94915 8.54115 8.366 8.20521 8.58755C7.90286 8.78786 7.79271 9.24377 7.95911 9.60657C8.12656 9.97093 8.50729 10.1003 8.80833 9.90187C9.54349 9.41595 10.0003 8.49568 10.0003 7.49948C10.0003 6.50328 9.54349 5.58332 8.80807 5.09772Z" fill="rgba(105, 86, 86, 1)"/>
    </svg>`
}else{
    volumeSeek.value = 0;
    music.volume = 0;
    volume = true;
    volumeBtn.innerHTML= '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="rgba(105, 86, 86, 1)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 9.50009L21 14.5001M21 9.50009L16 14.5001M4.6 9.00009H5.5012C6.05213 9.00009 6.32759 9.00009 6.58285 8.93141C6.80903 8.87056 7.02275 8.77046 7.21429 8.63566C7.43047 8.48353 7.60681 8.27191 7.95951 7.84868L10.5854 4.69758C11.0211 4.17476 11.2389 3.91335 11.4292 3.88614C11.594 3.86258 11.7597 3.92258 11.8712 4.04617C12 4.18889 12 4.52917 12 5.20973V18.7904C12 19.471 12 19.8113 11.8712 19.954C11.7597 20.0776 11.594 20.1376 11.4292 20.114C11.239 20.0868 11.0211 19.8254 10.5854 19.3026L7.95951 16.1515C7.60681 15.7283 7.43047 15.5166 7.21429 15.3645C7.02275 15.2297 6.80903 15.1296 6.58285 15.0688C6.32759 15.0001 6.05213 15.0001 5.5012 15.0001H4.6C4.03995 15.0001 3.75992 15.0001 3.54601 14.8911C3.35785 14.7952 3.20487 14.6422 3.10899 14.4541C3 14.2402 3 13.9601 3 13.4001V10.6001C3 10.04 3 9.76001 3.10899 9.54609C3.20487 9.35793 3.35785 9.20495 3.54601 9.10908C3.75992 9.00009 4.03995 9.00009 4.6 9.00009Z" stroke="#695656" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>"'
}
})