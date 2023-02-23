import anime from "animejs";

export function randomValues() {
  const square = document.getElementsByClassName("square");
  const circle = document.getElementsByClassName("circle");
  const triangle = document.getElementsByClassName("triangle");

  anime({
    targets: [square, circle, triangle],
    translateX: function () {
      return anime.random(-500, 500);
    },
    translateY: function () {
      return anime.random(-300, 300);
    },
    rotate: function () {
      return anime.random(0, 360);
    },
    scale: function () {
      return anime.random(0.2, 2);
    },
    duration: 2400,
    easing: "easeInOutQuad",
    complete: randomValues,
  });
}
