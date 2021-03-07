import Random from "./utils/random";

const R = new Random(20);
const random = R.random.bind(R);

const $ = document.querySelector.bind(document);
const $canvas = $("#canvas");
const ctx = $canvas.getContext("2d");
const canvasSize = ctx.canvas.width;

function step() {
  const minSize = 0.05 * canvasSize;
  const maxSize = 0.1 * canvasSize;

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvasSize, canvasSize);

  for (let i = 0; i < 20; i++) {
    const radius = minSize + random() * (maxSize - minSize);
    const x = radius + (canvasSize - radius * 2) * random();
    const y = radius + (canvasSize - radius * 2) * random();

    flower(x, y, radius);
  }
}

function flower(x, y, radius) {
  burst(x, y, radius * 1, "rgba(255,0,0,0.2)", 1 / 10, 10);
  burst(x, y, radius * 0.4, "rgba(0,0,0,0.2)", 1 / 8, 8);
  burst(x, y, radius * 0.2, "rgba(255,0,0,0.2)", 1 / 5, 5);
}

function burst(x, y, radius, fillStyle, iterationTurn, count) {
  if (count <= 0) return;

  const points = [];
  const thirdOfATurn = (Math.PI * 2) / 3;
  const random = iterationTurn * count * Math.PI * 2;
  for (let i = 0; i < 3; i++) {
    const v = random + thirdOfATurn * i;

    points.push({
      x: x + radius * Math.cos(v),
      y: y + radius * Math.sin(v),
    });
  }
  points.push(points[0]);

  ctx.beginPath();
  ctx.fillStyle = fillStyle;
  points.forEach((point, index) => {
    if (index === 0) {
      ctx.moveTo(point.x, point.y);
    } else {
      ctx.lineTo(point.x, point.y);
    }
  });
  ctx.closePath();
  ctx.fill();

  burst(x, y, radius * 1, fillStyle, iterationTurn, count - 1);
}

export function render() {
  step();
}
