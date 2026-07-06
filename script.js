const openBtn = document.getElementById("openBtn");
const hero = document.getElementById("hero");
const letterSection = document.getElementById("letterSection");
const scrollPaper = document.getElementById("scrollPaper");
const paragraphs = document.querySelectorAll(".letter-content p");
const closeBtn = document.querySelector(".close-btn");
const music = document.getElementById("music");

openBtn.addEventListener("click", () => {
  hero.classList.add("opened");

  music.volume = 0.35;
  music.play().catch(() => {});

  setTimeout(() => {
    letterSection.classList.add("show");

    letterSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 1100);

  setTimeout(() => {
    scrollPaper.classList.add("open");
  }, 1800);

  setTimeout(() => {
    paragraphs.forEach((p, index) => {
      setTimeout(() => {
        p.classList.add("visible");
      }, index * 550);
    });
  }, 2800);

  setTimeout(() => {
    closeBtn.classList.add("show");
  }, 7800);
});