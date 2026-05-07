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
  {
    title: "Chehra_Kya_Dekhte_Ho",
    path: "./songs/Chehra_Kya_Dekhte_Ho.mp3",
    image: "./images/Chehra_Kya_Dekhte_Ho.png",
  },
  {
    title: "Dil_Hai_Ki_Manta_Nahin",
    path: "./songs/Dil_Hai_Ki_Manta_Nahin.mp3",
    image: "./images/Dil_Hai_Ki_Manta_Nahin.png",
  },
  {
    title: "Do_Dil_Mil_Rahe_Hai",
    path: "./songs/Do_Dil_Mil_Rahe_Hai.mp3",
    image: "./images/Do_Dil_Mil_Rahe_Hai.png",
  },
  {
    title: "Is_Pyar_Se_Meri_Taraf",
    path: "./songs/Is_Pyar_Se_Meri_Taraf.mp3",
    image: "./images/Is_Pyar_Se_Meri_Taraf.png",
  },
  {
    title: "Jab_Koi_Baat_Bigad_Jaye",
    path: "./songs/Jab_Koi_Baat_Bigad_Jaye.mp3",
    image: "./images/Jab_Koi_Baat_Bigad_Jaye.png",
  },
  {
    title: "Mera_Dil_Bhi_Kitna_Pagal_Hai",
    path: "./songs/Mera_Dil_Bhi_Kitna_Pagal_Hai.mp3",
    image: "./images/Mera_Dil_Bhi_Kitna_Pagal_Hai.png",
  },
  {
    title: "Mujhe_Neend_Na_Aaye",
    path: "./songs/Mujhe_Neend_Na_Aaye.mp3",
    image: "./images/Mujhe_Neend_Na_Aaye.png",
  },
  {
    title: "Mujhe_Raat_Din_Bas",
    path: "./songs/Mujhe_Raat_Din_Bas.mp3",
    image: "./images/Mujhe_Raat_Din_Bas.png",
  },
  {
    title: "tujhe_na_dekhu_to_chain",
    path: "./songs/Tujhe_Na_Dekhu_Toh_Chain.mp3",
    image: "./images/tujhe_na_dekhu_to_chain.png",
  },
  {
    title: "mujhse_mohabbat_ka_izhar",
    path: "./songs/Mujhse_Mohabbat_Ka_Izhaar_Karta.mp3",
    image: "./images/mujhse_mohabbat_ka_izhar.png",
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
