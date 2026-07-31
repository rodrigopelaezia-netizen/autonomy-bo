document.querySelectorAll(".matrix-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const shell = button.closest(".matrix-shell");
    const isOpen = shell.classList.toggle("open");

    button.setAttribute("aria-expanded", String(isOpen));
    button.textContent = isOpen
      ? "Ocultar matriz completa"
      : "Ver matriz completa";
  });
});
