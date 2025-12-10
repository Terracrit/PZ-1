document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("model-form");

  form.addEventListener("submit", function (event) {
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    window.print();
  });
});
