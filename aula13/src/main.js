const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const gameOver = document.querySelector(".game-over");
const retryBtn = document.querySelector(".retry")

const jump = () => {
  mario.classList.add("mario-jump");

  setTimeout(() => {
    mario.classList.remove("mario-jump");
  }, 500);
};

// return

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = window.getComputedStyle(mario).bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 110) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./imgs/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    clouds.style.animation = "none";

    gameOver.style.display = "grid";

    retryBtn.style.display = "grid";

    clearInterval(loop);

  }
}, 10);

function buttonToRetry() {

}

document.addEventListener("keydown", jump);
