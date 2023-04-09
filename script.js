const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  btn.style.opacity = "0";
  btn.style.cursor = "inherit";
  document.querySelector(".upin").classList.add("active");
  document.querySelector(".ipin").classList.add("active");
  for (var i = 0; i < 100; i++) {
    var drop = document.createElement("div");
    drop.className = "drop";
    drop.style.left = Math.random() * 100 + "vw";
    drop.style.animationDelay = Math.random() * 3000 + "ms";
    drop.innerHTML = "&#10084;";
    document.querySelector(".container").appendChild(drop);
  }
});
