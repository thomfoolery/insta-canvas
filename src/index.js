import {render} from "./sketch";

render();

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") render();
});
