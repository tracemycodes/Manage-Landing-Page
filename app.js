const menu = document.querySelector(".hamburger-menu");
const carousel = document.querySelectorAll(".carousel-item");
const body = document.body;



menu.addEventListener("click", (e) => {
  const UImodalContainer = document.querySelector("#modal-container");
  UImodalContainer.classList.toggle("modal-open");
  
  if (UImodalContainer.classList.contains("modal-open")) {

    UImodalContainer.style.display = "flex";
    menu.setAttribute("src", "./images/icon-close.svg");

  } else {

    UImodalContainer.style.display = "none";
    menu.setAttribute("src", "./images/icon-hamburger.svg");

  } 

  e.preventDefault;
}
)

window.onclick = function (e) {
  const UImodalContainer = document.querySelector("#modal-container");

  if (e.target.className != "modal-component" && e.target.className != "hamburger-menu") {

    UImodalContainer.classList.remove("modal-open");
    UImodalContainer.style.display = "none"
    menu.setAttribute("src", "./images/icon-hamburger.svg");

  }
}

let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove("scroll-Up");
    return;
  }
  if (currentScroll > lastScroll && !body.classList.contains("scroll-Down")) {
    body.classList.remove("scroll-Up");
    body.classList.add("scroll-Down");
  } else if (currentScroll < lastScroll && body.classList.contains("scroll-Down")){
    body.classList.remove("scroll-Down");
    body.classList.add("scroll-Up");
  }
  lastScroll = currentScroll;
});


console.log(carousel);
// console.log(carouselArr);


function arrayit () {
  const carouselArr = [...carousel]
  const UIcarouselDiv = document.querySelector(".carousel-div")

  let lastItem = carouselArr.pop()

  carouselArr.unshift(lastItem)
  // UIcarouselDiv.replaceChild(carouselArr, carousel)
 
}

arrayit()