const returnToTopButton = document.getElementById("return-to-top");

if (returnToTopButton) {
  // Scroll to top behavior
  returnToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Scroll event listener
  document.addEventListener("scroll", () => {
    toggleReturnToTop(window.scrollY > 100);
  });
}

function toggleReturnToTop(active) {
  returnToTopButton?.classList.toggle("visible", active);
}
