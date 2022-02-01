const menu = document.querySelector(".hamburger-menu");
const body = document.body;
const navBar = document.querySelector(".nav-bar");
const UIcarousel = document.querySelectorAll(".carousel-item");

// console.log(navBar);

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
});

window.onclick = function (e) {
  const UImodalContainer = document.querySelector("#modal-container");

  if (
    e.target.className != "modal-component" &&
    e.target.className != "hamburger-menu"
  ) {
    UImodalContainer.classList.remove("modal-open");
    UImodalContainer.style.display = "none";
    menu.setAttribute("src", "./images/icon-hamburger.svg");
  }
};

let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  // console.log(currentScroll > 102)
  navBarScroll(currentScroll);
  if (currentScroll <= 0) {
    body.classList.remove("scroll-Up");
    return;
  }
  if (currentScroll > lastScroll && !body.classList.contains("scroll-Down")) {
    body.classList.remove("scroll-Up");
    body.classList.add("scroll-Down");
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains("scroll-Down")
  ) {
    body.classList.remove("scroll-Down");
    body.classList.add("scroll-Up");
  }
  lastScroll = currentScroll;
});

function navBarScroll(point) {
  if (point > 103) {
    navBar.classList.add("nav-bar-offset");
  } else {
    navBar.classList.remove("nav-bar-offset");
  }
}

// console.log(carousel);

// function carouselEl () {
//   const carouselArr = [...carousel]
//   console.log(carouselArr);
//   const UIcarouselDiv = document.querySelector(".carousel-div")
//   console.log(UIcarouselDiv);

//   let lastItem = carouselArr.pop()

//   carouselArr.unshift(lastItem)
//   UIcarouselDiv.replaceChild(carouselArr, carousel)

// }

// carouselEl()

const item1 = `<div class="profile-photo">
              <img src="./images/avatar-anisha.png" alt="loading..." />
            </div>
            <h4 class="article-header-three">Anisha Li</h4>
            <p class="article-paragraph">
              Stop jumping from one service to another to communicate, store
              files, track tasks and share documents. Manage offers an
              all-in-one team productivity solution.
            </p>`;

const item2 = `<div class="profile-photo">
              <img src="./images/avatar-ali.png" alt="loading..." />
            </div>
            <h4 class="article-header-three">Ani Bravo</h4>
            <p class="article-paragraph">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>`;

const item3 = `<div class="profile-photo">
              <img src="./images/avatar-richard.png" alt="loading..." />
            </div>
            <h4 class="article-header-three">Richard Watts</h4>
            <p class="article-paragraph">
              “Manage allows us to provide structure and process. It keeps us
              organized and focused. I can’t stop recommending them to everyone
              I talk to!”
            </p>`;

const item4 = `<div class="profile-photo">
              <img src="./images/avatar-shanai.png" alt="loading..." />
            </div>
            <h4 class="article-header-three">Shanai Gough</h4>
            <p class="article-paragraph">
              “Their software allows us to track, manage and collaborate on our
              projects from anywhere. It keeps the whole team in-sync without
              being intrusive.”
            </p>`;

const carouselArr = [item1, item2, item3, item4];

const UInext = document.querySelector(".next");
const UIprev = document.querySelector(".prev");

UInext.addEventListener('click', nextSlider);
UIprev.addEventListener('click', prevSlider);


function nextSlider (e) {
  e.preventDefault();

  const UIcarouselDiv = document.querySelector(".carousel-div");
  let carouselEl = [...UIcarousel]
  let lastItem = carouselEl.pop();
  carouselEl.unshift(lastItem)
  // console.log(carouselEl);

  UIcarouselDiv.innerHTML = ` `
  
  carouselEl.forEach((divEl, index) => {
    console.log(divEl, index);
    // let carouselEl = document.createElement("div");
  // carouselEl.className = "carousel-item";
  // carouselEl.innerHTML = divEl;
  UIcarouselDiv.appendChild(divEl);
 });
}

function prevSlider (e) {
  e.preventDefault();

  const UIcarouselDiv = document.querySelector(".carousel-div");
  let lastItem = carouselArr.shift();
  carouselArr.push(lastItem)

  UIcarouselDiv.innerHTML = ` `

  carouselArr.forEach((divEl) => {
    console.log(divEl);
  let carouselEl = document.createElement("div");
  carouselEl.className = "carousel-item";
  carouselEl.innerHTML = divEl;
  UIcarouselDiv.appendChild(carouselEl);
 });
}



