const intro = document.getElementById("intro");
const card = document.getElementById("card");

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const progress = document.getElementById("progress");
const songName = document.getElementById("songName");

let typeText = "Game Developer • 3D Artist • Roblox • Blender";
let typeIndex = 0;

const songs = [
  {
    name: "Night City Drive",
    src: "https://files.catbox.moe/64div5.mp3"
  },
  {
    name: "Neon Streets",
    src: "https://files.catbox.moe/h2k35s.mp3"
  },
  {
    name: "Cyber Dreams",
    src: "https://files.catbox.moe/g91ulp.mp3"
  }
];

let songIndex = 0;
let isPlaying = false;

intro.addEventListener("click", () => {
  intro.style.display = "none";
  card.classList.remove("hidden");
  loadSong(songIndex);
  audio.play();
  isPlaying = true;
  playBtn.classList.add("pause");
  typeWriter();
});

function loadSong(index) {
  audio.src = songs[index].src;
  songName.textContent = songs[index].name;
}

playBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    playBtn.classList.remove("pause");
  } else {
    audio.play();
    playBtn.classList.add("pause");
  }
  isPlaying = !isPlaying;
});

nextBtn.addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songIndex);
  audio.play();
  playBtn.classList.add("pause");
  isPlaying = true;
});

prevBtn.addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songIndex);
  audio.play();
  playBtn.classList.add("pause");
  isPlaying = true;
});

audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;
  progress.style.width = (audio.currentTime / audio.duration) * 100 + "%";
});

audio.addEventListener("ended", () => {
  nextBtn.click();
});

function typeWriter() {
  if (typeIndex < typeText.length) {
    document.getElementById("typewriter").textContent += typeText.charAt(typeIndex);
    typeIndex++;
    setTimeout(typeWriter, 55);
  }
}
