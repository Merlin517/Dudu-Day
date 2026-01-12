let current = 0;
const slides = document.querySelectorAll(".slide");
const music = document.getElementById("bgMusic");

function nextSlide() {
  if (current === 0) music.play();
  slides[current].classList.remove("active");
  current++;
  slides[current].classList.add("active");
}

function unlockLetter() {
  document.getElementById("letter").classList.remove("hidden");
}

/* HEART BURSTS – NO OVERLAP */
const heartQuotes = [
  "Some people feel like home and somehow you always did 💕",
  "You were my favorite surprise ✨",
  "Soft hearts, loud love 💖"
];

let heartIndex = 0;

function startHearts() {
  const container = document.getElementById("heartContainer");
  container.innerHTML = "";
  heartIndex = 0;
  showHeart();
}

function showHeart() {
  if (heartIndex >= heartQuotes.length) return;

  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💗";
  heart.style.left = "50%";

  const text = document.createElement("p");
  text.innerText = heartQuotes[heartIndex];
  text.style.marginTop = "80px";

  const container = document.getElementById("heartContainer");
  container.appendChild(heart);

  setTimeout(() => {
    container.appendChild(text);
  }, 1800);

  setTimeout(() => {
    container.innerHTML = "";
    heartIndex++;
    showHeart();
  }, 4000);
}
