// script.js

const songs = [
  {
    title: "Saathiya_Bin_Tere",
    path: "./songs/Saathiya_Bin_Tere.mp3",
    image: "./images/saathiya_bin_tere.png",
  },

  {
    title: "Suna_Suna",
    path: "./songs/Suna_Suna.mp3",
    image: "./images/krishna_cottage.png",
  },

  {
    title: "Tum Dil ki Dhadkan Me",
    path: "./songs/Tum_Dil_Ki_Dhadkan_Mein.mp3",
    image: "./images/dhadkan.png",
  },
];

let currentSong = 0;

const audio = new Audio();

const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const title = document.getElementById("song-title");
const progress = document.getElementById("progress");

const songImage = document.getElementById("song-image");

// Load Song

function loadSong(index) {
  audio.src = songs[index].path;

  title.innerText = songs[index].title;

  songImage.src = songs[index].image;
}

loadSong(currentSong);

// Play Pause Toggle

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.innerText = "⏸";
  } else {
    audio.pause();
    playBtn.innerText = "▶";
  }
});

// Next Song

nextBtn.addEventListener("click", () => {
  currentSong++;

  if (currentSong >= songs.length) {
    currentSong = 0;
  }

  loadSong(currentSong);

  audio.play();

  playBtn.innerText = "⏸";
});

// Previous Song

prevBtn.addEventListener("click", () => {
  currentSong--;

  if (currentSong < 0) {
    currentSong = songs.length - 1;
  }

  loadSong(currentSong);

  audio.play();

  playBtn.innerText = "⏸";
});

// Progress Bar Update

audio.addEventListener("timeupdate", () => {
  progress.max = audio.duration;

  progress.value = audio.currentTime;
});

// Change Song Position

progress.addEventListener("input", () => {
  audio.currentTime = progress.value;
});

// Auto Play Next Song

audio.addEventListener("ended", () => {
  currentSong++;

  if (currentSong >= songs.length) {
    currentSong = 0;
  }

  loadSong(currentSong);

  audio.play();
});
