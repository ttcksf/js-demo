const accordion = document.querySelectorAll(".accordion-header");

accordion.forEach((selected) => {
  selected.addEventListener("click", () => {
    let content = selected.nextElementSibling;
    console.log(selected);
    console.log(content);
    content.classList.toggle("show");
  });
});
