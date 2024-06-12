document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".side-bar").style.right = 0;
})

window.addEventListener("click", event => {
  if(event.target.classList[2] != "hamburger-menu"){
    document.querySelector(".side-bar").style.right = "-100%";
  }

})

