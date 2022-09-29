let homePage = document.querySelector(".container");
let thankYouPage = document.querySelector(".container2");
let submit = document.querySelector(".submit");
let ratingSeted = document.getElementsByName("rating-value");
let ratingDisplay = document.querySelector(".rating-set");

ratingSeted.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (event.target.checked) {
      let value = element.getAttribute("value");
      console.log(value);
      Submit(value)
    }
  });
});

function Submit(value) {
  submit.addEventListener("click", () => {
    thankYouPage.classList.toggle("hide");
    homePage.classList.toggle("hide");
    ratingDisplay.innerHTML = `You selected out ${value} of 5`;
  });
}
