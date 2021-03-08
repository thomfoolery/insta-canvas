import Random from "../../utils/random";
import {HSL} from "../../utils/palatte";

const R = new Random(40);
const random = R.random.bind(R);

const $ = document.querySelector.bind(document);
const $canvas = $("#canvas");
const ctx = $canvas.getContext("2d");
const canvasSize = ctx.canvas.width;

function step() {
  const rootColorH = Math.floor(random() * 360);
  const colorCount = 4;
  const colors = HSL.rotation(rootColorH, 100, 50, colorCount);

  colors.forEach((color, index) => {
    ctx.fillStyle = color;
    ctx.fillRect(
      index * (canvasSize * (1 / colorCount)),
      0,
      canvasSize * (1 / colorCount),
      canvasSize
    );
  });
}

export function render() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvasSize, canvasSize);

  step();
}

export const meta = {
  title: "Color blocks",
  description: "",
};
