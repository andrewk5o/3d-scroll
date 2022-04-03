const zSpacing = -1000;
let lastPos = zSpacing / 5;
const $frames = Array.from(document.querySelectorAll(".frame"));
const zValues = [];

window.onscroll = () => {
  const top = document.documentElement.scrollTop;
  const delta = lastPos - top;
  lastPos = top;

  $frames.forEach((_, i) => {
    zValues.push(i * zSpacing + zSpacing);
    zValues[i] += delta * -5;
    const frame = $frames[i];
    const transform = `translateZ(${zValues[i]}px)`
    const opacity = zValues[i] < Math.abs(zSpacing) / 1.5 ? 1 : 0;
    frame.setAttribute("style", `transform: ${transform}; opacity: ${opacity}`);
  })
}

const soundButton = document.querySelector(".soundButton");
const audio = document.querySelector(".audio");

soundButton.onclick = (e) => {
  e.target.classList.toggle("paused");
  audio.paused ? audio.play() : audio.pause();
}

window.onfocus = () => {
  soundButton.classList.contains("paused") ? audio.pause() : audio.play();
}

window.onblur = () => {
  audio.pause();
}

window.scrollTo(0, 1);