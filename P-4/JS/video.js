// ---- Відео: елементи керування ----
const video = document.getElementById("myVideo");
const btnPlay = document.getElementById("btnPlay");
const btnPause = document.getElementById("btnPause");
const vol = document.getElementById("vol");
const volLabel = document.getElementById("volLabel");

video.volume = parseFloat(vol.value);
volLabel.textContent = Math.round(video.volume * 100) + "%";

btnPlay.addEventListener("click", () => {
  if (video.muted) video.muted = false;
  video.play().catch((err) => console.warn("Play blocked:", err));
});

btnPause.addEventListener("click", () => video.pause());

vol.addEventListener("input", (e) => {
  video.volume = parseFloat(e.target.value);
  volLabel.textContent = Math.round(video.volume * 100) + "%";
});
