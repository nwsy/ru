// Draw a simple sleeping white cat on the left side of the cake
function drawSleepingCat(time) {
  const x = centerX - 280; // Left side of cake
  const y = centerY + 50;

  ctx.save();
  ctx.translate(x, y);

  // Body
  ctx.fillStyle = "#FFF";
  ctx.beginPath();
  ctx.ellipse(0, 0, 40, 20, 0, 0, Math.PI * 2);
  ctx.fill();

  // Head
  ctx.beginPath();
  ctx.arc(30, 0, 20, 0, Math.PI * 2);
  ctx.fill();

  // Ears
  ctx.beginPath();
  ctx.moveTo(-10, -20);
  ctx.lineTo(-20, -40);
  ctx.lineTo(0, -30);
  ctx.closePath();
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(40, -20);
  ctx.lineTo(30, -40);
  ctx.lineTo(50, -30);
  ctx.closePath();
  ctx.fill();

  // Eyes (closed)
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(35, -10);
  ctx.lineTo(45, -10);
  ctx.stroke();

  // Tail
  ctx.beginPath();
  ctx.strokeStyle = "#FFF";
  ctx.lineWidth = 6;
  ctx.moveTo(-40, 0);
  ctx.quadraticCurveTo(-70, 20, -90, 0);
  ctx.stroke();

  // Feet
  ctx.beginPath();
  ctx.fillStyle = "#FFF";
  ctx.arc(-40, 15, 8, 0, Math.PI * 2);
  ctx.fill();
  ctx.arc(-50, 25, 8, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}