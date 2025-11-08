const modalWindow = document.querySelector(".modal");
const modalOpenButtons = document.querySelectorAll(".modal-button");

const modalCloseButton = document.querySelector(".modal-close");

modalCloseButton.addEventListener("click", () => {
  modalWindow.style.display = "none";
});

modalOpenButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    modalWindow.style.display = "flex";
  });
});
