import Random from "../../utils/random";
import {HSL} from "../../utils/palatte";

const R = new Random(40);
const random = R.random.bind(R);

const $ = document.querySelector.bind(document);
const $canvas = $("#canvas");
const ctx = $canvas.getContext("2d");
const canvasSize = ctx.canvas.width;

function step() {
  const minX = canvasSize * -0.1;
  const maxX = canvasSize * 1.1;
  const minY = canvasSize * -0.1;
  const maxY = canvasSize * 1.1;

  const resolution = canvasSize * 0.04;

  const rowCount = Math.floor((maxY - minY) / resolution);
  const columnCount = Math.floor((maxX - minX) / resolution);

  console.log(columnCount, rowCount, columnCount * rowCount);

  const defaultAngle = Math.PI * 0.25;

  const grid = Array(rowCount).fill(Array(columnCount).fill(defaultAngle));

  const lineLength = 30;

  ctx.lineWidth = 3;
  ctx.strokeStyle = "white";
  grid.forEach((row, rowIndex) => {
    row.forEach((_, columnIndex) => {
      const x = rowIndex * resolution;
      const y = columnIndex * resolution;
      const angle = (columnIndex / columnCount) * Math.PI;

      const x1 = x + ((Math.cos(angle) * lineLength) / 2) * -1;
      const y1 = y + ((Math.sin(angle) * lineLength) / 2) * -1;
      const x2 = x + (Math.cos(angle) * lineLength) / 2;
      const y2 = y + (Math.sin(angle) * lineLength) / 2;

      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    });
  });
}

export function render() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvasSize, canvasSize);

  step();
}

export const meta = {
  title: "Flow field",
  description: "",
};
