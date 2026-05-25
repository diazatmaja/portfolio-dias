const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

const typingText = document.getElementById("typingText");

if (typingText) {
  const text = typingText.textContent.trim();
  typingText.textContent = "";

  let index = 0;

  function typeName() {
    if (index < text.length) {
      typingText.textContent += text.charAt(index);
      index++;
      setTimeout(typeName, 120);
    }
  }

  window.addEventListener("load", typeName);
}
