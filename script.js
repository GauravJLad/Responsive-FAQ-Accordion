const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    items.forEach((el) => el.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  });
});
