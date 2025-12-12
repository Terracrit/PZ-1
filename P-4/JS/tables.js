const rows = document.querySelectorAll("table tbody tr");
rows.forEach((row) => {
  row.addEventListener("mouseenter", () => {
    row.style.backgroundColor = "#d3e4f0";
  });
  row.addEventListener("mouseleave", () => {
    row.style.backgroundColor = "";
  });
});
