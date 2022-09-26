let homePage = document.querySelector(".container");
let thankYouPage = document.querySelector(".container2");
let submit = document.querySelector(".submit");
let ratingSeted = document.querySelectorAll(".rating-values");
let ratingDisplay = document.querySelector(".rating-set");

ratingSeted.forEach((element) => {
  element.addEventListener("click", (event) => {
    this.value = event.target.textContent;
    if(value){
      Submit()
    }
  });
});

function Submit (){
  submit.addEventListener("click", () => {
    thankYouPage.classList.toggle("hide");
    homePage.classList.toggle("hide");
    ratingDisplay.innerHTML = `You selected out ${value} of 5`;
  });
}

