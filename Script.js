let current = 0;

const slides = document.querySelectorAll(".slide");
const music = document.getElementById("bgMusic");

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  if (current === 0 && music) {
    music.play().catch(() => {});
  }

  if (current < slides.length - 1) {
    current++;
    showSlide(current);
  }
}

/* LOCK LETTER */
function unlockLetter() {
  document.getElementById("letter").classList.remove("hidden");
}

/* HEART BURSTS – SAFE MODE */
const heartQuotes = [
  "Some people feel like home 💕",
  "You were my favorite surprise ✨",
  "Soft hearts, loud love 💖"
];

let heartIndex = 0;

function startHearts() {
  const container = document.getElementById("heartContainer");
  container.innerHTML = "";
  heartIndex = 0;

  const interval = setInterval(() => {
    if (heartIndex >= heartQuotes.length) {
      clearInterval(interval);
      return;
    }

    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💗";
    heart.style.left = "50%";

    const text = document.createElement("p");
    text.innerText = heartQuotes[heartIndex];
    text.style.marginTop = "90px";

    container.innerHTML = "";
    container.appendChild(heart);

    setTimeout(() => {
      container.appendChild(text);
    }, 1800);

    heartIndex++;
  }, 4000);
}
