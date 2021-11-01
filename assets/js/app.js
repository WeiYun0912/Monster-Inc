const wrapper = document.querySelector(".wrapper");
const buttons = document.querySelectorAll("button");
let doorsPicture = [
  "door1.png",
  "door2.png",
  "door3.png",
  "door4.png",
  "door5.png",
  "door6.png",
  "door7.png",
  "door8.png",
  "door9.png",
];

for (let i = 0; i <= 50; i++) {
  let randomNumber = Math.floor(Math.random() * 9);
  const doors = document.createElement("div");
  doors.classList.add("door");
  doors.style.backgroundImage = `url(assets/images/${doorsPicture[randomNumber]})`;
  wrapper.appendChild(doors);
}

function animateHearts() {
  anime({
    targets: ".door",
    translateX: () => anime.random(-1000, 1000),
    translateY: () => anime.random(-500, 500),
    // scale : () => anime.random(1,3),
    easing: "easeOutInBack",
    duration: 2000,
    delay: anime.stagger(30),
    complete: animateHearts,
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;
    let ripples = document.createElement("span");
    ripples.style.left = x + "px";
    ripples.styletop = y + "px";
    this.appendChild(ripples);
    setTimeout(() => {
      ripples.remove();
    }, 1000);
  });
});

animateHearts();
