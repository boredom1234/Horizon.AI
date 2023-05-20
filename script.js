const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let w = (canvas.width = window.innerWidth);
let h = (canvas.height = window.innerHeight);

let rot1 = (random(1, 20) * Math.PI) / 180;
let x = Math.floor(Math.random() * w);
let y = Math.floor(Math.random() * h);
let bw;

let t = 0;
let speed = 2;
let interval;

ctx.globalCompositeOperation = "color";
ctx.strokeStyle = "white";
ctx.textAlign = "center";
ctx.font = `bold ${Math.floor(Math.random() * 200)}px sans-serif`;

// SPIRAL TEXT 1
function turtle25() {
  if (t % speed === 0) {
    ctx.translate(w / 2, h / 2);
    ctx.rotate(rot1);
    ctx.translate(-w / 2, -h / 2);
    ctx.strokeText("HORIZON", x, y);

    x = Math.floor(Math.random() * w);
  }
  t++;
  if (t % (speed * 45) === 0) {
  }
  if (t % (speed * 90) === 0) {
    y = Math.floor(Math.random() * h);
    bw = random(0, 11);
    if (bw === 0) {
      ctx.strokeStyle = "white";
    } else if (bw === 1) {
      ctx.strokeStyle = "black";
    } else if (bw === 2 || bw === 3) {
      ctx.globalCompositeOperation = "color-dodge";
    } else if (bw === 4 || bw === 5) {
      ctx.globalCompositeOperation = "source-over";
    } else if (bw === 6) {
      ctx.globalCompositeOperation = "darken";
    } else if (bw === 7) {
      ctx.globalCompositeOperation = "color-burn";
    } else {
      ctx.globalCompositeOperation = "color";
    }
    console.log(ctx.globalCompositeOperation);
    ctx.strokeStyle = `rgb(${random(0, 255)},${random(0, 255)},${random(
      0,
      255
    )})`;
    ctx.font = `bold ${Math.floor(Math.random() * 200)}px sans-serif`;
  }
  if (t % (speed * 180) === 0) {
    rot1 = (random(1, 30) * Math.PI) / 180;
  }
  interval = requestAnimationFrame(turtle25);
}

turtle25();

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min) + min);
  return num;
}
