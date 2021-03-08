import {render, meta} from "./sketchbook/sketch";

render();
updateMeta();

function updateMeta() {
  const title = document.querySelector("#canvas + figcaption > h1");
  const description = document.querySelector("#canvas + figcaption > p");

  title.innerText = meta.title;
  description.innerText = meta.description;
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    render();
    updateMeta();
  }
});
