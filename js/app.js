const accordations = document.querySelectorAll(".accordion__contentBx");



accordations.forEach((accordation, index) => accordation.addEventListener("click", function () {
    console.log(accordation.children);
    if (accordation.children[1].classList.contains("accordion__contentBx--content")) {

        accordation.children[1].classList.toggle("active");
    }
}));