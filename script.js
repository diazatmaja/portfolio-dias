const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

/* MOBILE MENU */

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

/* WEBSITE LOAD */

window.addEventListener("load", () => {
  /* LOADER */

  const loader = document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hide");

    /* TYPING */

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
