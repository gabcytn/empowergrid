document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".side-bar").style.right = 0;
  document.querySelector("main").style.filter = "blur(5px)";
  document.querySelector("main").style.pointerEvents = "none";
})

window.addEventListener("click", event => {
  if(event.target.classList[2] != "hamburger-menu"){
    document.querySelector(".side-bar").style.right = "-100%";
    document.querySelector("main").style.filter = "none";
    document.querySelector("main").style.pointerEvents = "auto";
  }

})

