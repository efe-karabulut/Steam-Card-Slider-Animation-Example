const cardContent1 = document.getElementById("cardContent1");
const gofVideo = document.getElementById("gofVideo");

const cardContent2 = document.getElementById("cardContent2");
const fc24Video = document.getElementById("fc24Video");

const cardContent3 = document.getElementById("cardContent3");
const diabloVideo = document.getElementById("diabloVideo");

const cardContent4 = document.getElementById("cardContent4");
const battleVideo = document.getElementById("battleBitVideo");

const cardContent5 = document.getElementById("cardContent5");
const forestVideo = document.getElementById("forestVideo");

cardContent1.addEventListener("mouseenter", () => {
  gofVideo.play();
});

cardContent1.addEventListener("mouseleave", () => {
  gofVideo.pause();
});

cardContent2.addEventListener("mouseenter", () => {
  fc24Video.play();
});

cardContent2.addEventListener("mouseleave", () => {
  fc24Video.pause();
});

cardContent3.addEventListener("mouseenter", () => {
  diabloVideo.play();
});

cardContent3.addEventListener("mouseleave", () => {
  diabloVideo.pause();
});

cardContent4.addEventListener("mouseenter", () => {
  battleVideo.play();
});

cardContent4.addEventListener("mouseleave", () => {
  battleVideo.pause();
});

cardContent5.addEventListener("mouseenter", () => {
  forestVideo.play();
});

cardContent5.addEventListener("mouseleave", () => {
  forestVideo.pause();
});

gofVideo.loop = true;
fc24Video.loop = true;
diabloVideo.loop = true;

gofVideo.muted = true;
fc24Video.muted = true;
diabloVideo.muted = true;
//
//
//
//
//
const cardContainer = document.getElementById("cardContainer");
const leftArrow = document.getElementById("arrowLeft");
const rightArrow = document.getElementById("arrowRight");

leftArrow.addEventListener("click", () => {
  leftArrow.disabled = true;
  cardContainer.scrollLeft -= 392;
  setTimeout(() => {
    leftArrow.disabled = false;
  }, 500);
});

rightArrow.addEventListener("click", () => {
  rightArrow.disabled = true;
  cardContainer.scrollLeft += 392;
  setTimeout(() => {
    rightArrow.disabled = false;
  }, 500);
});
