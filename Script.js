let slides = document.querySelectorAll(".slide");
let index = 0;

function nextSlide() {
  slides[index].classList.remove("active");
  index++;
  slides[index].classList.add("active");
}

function flip(card) {
  card.classList.toggle("flipped");
}

function blow() {
  nextSlide();
}

function burst(el) {
  el.innerText = "💥 You’re loved 💗";
}

function unlock() {
  document.getElementById("letter").classList.remove("hidden");
}

setInterval(() => {
  const emoji = document.createElement("span");
  emoji.innerText = ["💖","✨","💗","🌸","💫"][Math.floor(Math.random()*5)];
  emoji.style.left = Math.random()*100 + "vw";
  document.getElementById("emojis").appendChild(emoji);
  setTimeout(() => emoji.remove(), 8000);
}, 800);
