"use strict";
const dialog = document.querySelector("#lightbox");
const buttons = Array.from(document.querySelectorAll("[data-shot]"));
let previousFocus = null;
function openShot(button) {
  if (!dialog || typeof dialog.showModal !== "function") return;
  previousFocus = button;
  const source = button.querySelector("img");
  const image = dialog.querySelector("img");
  image.src = source.src;
  image.alt = source.alt;
  dialog.querySelector("#lightbox-title").textContent = source.alt;
  dialog.showModal();
}
buttons.forEach(button => button.addEventListener("click", () => openShot(button)));
if (dialog) {
  dialog.querySelector("button").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener("close", () => previousFocus?.focus());
}
