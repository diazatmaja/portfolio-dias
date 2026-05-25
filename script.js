const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  setTimeout(() => {
    if (loader) {
      loader.classList.add("hide");
    }

    const typingText = document.getElementById("typingText");

    if (typingText) {
      const text = "Dias Atmaja";
      typingText.textContent = "";

      let index = 0;

      function typeName() {
        if (index < text.length) {
          typingText.textContent += text.charAt(index);
          index++;
          setTimeout(typeName, 120);
        }
      }

      typeName();
    }
  }, 2200);
});

const cursorGlow = document.getElementById("cursorGlow");

if (cursorGlow) {
  document.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
  });
}

const navbar = document.querySelector(".navbar");

if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}
