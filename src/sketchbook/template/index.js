import Random from "../../utils/random";

const R = new Random(12345);
const random = R.random.bind(R);

const $ = document.querySelector.bind(document);
const $canvas = $("#canvas");
const ctx = $canvas.getContext("2d");
const canvasSize = ctx.canvas.width;

function step() {}

export function render() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvasSize, canvasSize);

  step();
}

export const meta = {
  title: "Sketch",
  description: "",
};
