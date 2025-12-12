const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, canvas.width, canvas.height);

const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
grad.addColorStop(0, "#a1c4fd");
grad.addColorStop(1, "#c2e9fb");
ctx.fillStyle = grad;
ctx.fillRect(10, 20, 780, 60);

ctx.beginPath();
ctx.arc(100, 140, 30, 0, Math.PI * 2);
ctx.fillStyle = "#ffb6b9";
ctx.fill();

ctx.beginPath();
ctx.moveTo(180, 110);
ctx.lineTo(240, 160);
ctx.lineTo(120, 160);
ctx.closePath();
ctx.fillStyle = "#f6d365";
ctx.fill();
