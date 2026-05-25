const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

const fadeElements = document.querySelectorAll(".fade-in");

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 },
);

fadeElements.forEach((element) => {
  fadeObserver.observe(element);
});

const text = "Dias Atmaja";
const typingText = document.getElementById("typingText");
let index = 0;

function typeName() {
  if (!typingText) return;

  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;
    setTimeout(typeName, 120);
  }
}

window.addEventListener("load", () => {
  typeName();
});
