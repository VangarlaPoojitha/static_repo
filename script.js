document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll("#project-list li");
  items.forEach(item => {
    item.style.cursor = "pointer";
    item.addEventListener("click", () => {
      item.style.color = item.style.color === "rgb(9, 105, 218)" ? "" : "#0969da";
    });
  });
});
