"use strict";
const box=document.querySelector("#lightbox"),shots=[...document.querySelectorAll("[data-shot]")];let current=0,focus=null;
function show(index){current=(index+shots.length)%shots.length;const img=shots[current].querySelector("img");box.querySelector("img").src=img.src;box.querySelector("img").alt=img.alt;box.querySelector("#shot-title").textContent=shots[current].dataset.title;}
shots.forEach((button,index)=>button.addEventListener("click",()=>{if(!box.showModal)return;focus=button;show(index);box.showModal();}));
box?.querySelector("[data-close]").addEventListener("click",()=>box.close());box?.querySelector("[data-prev]").addEventListener("click",()=>show(current-1));box?.querySelector("[data-next]").addEventListener("click",()=>show(current+1));
box?.addEventListener("keydown",event=>{if(event.key==="ArrowRight"){event.preventDefault();show(current+1)}if(event.key==="ArrowLeft"){event.preventDefault();show(current-1)}});
box?.addEventListener("click",event=>{if(event.target===box){const r=box.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)box.close()}});box?.addEventListener("close",()=>focus?.focus());
