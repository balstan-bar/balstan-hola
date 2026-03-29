function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function openMap() {
  window.open("https://maps.app.goo.gl/v1zTY69PP8daiiuw8", "_blank");
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function openMap() {
  window.open("https://maps.app.goo.gl/v1zTY69PP8daiiuw8", "_blank");
}

function openWhatsApp() {
  window.open("https://wa.me/9647807060109", "_blank");
}

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 3000);

document.addEventListener("DOMContentLoaded", function () {
  const phoneDropdown = document.querySelector(".phone-dropdown");
  const phoneToggle = document.querySelector(".phone-toggle");

  if (phoneToggle && phoneDropdown) {
    phoneToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      phoneDropdown.classList.toggle("active");
    });

    document.addEventListener("click", function (e) {
      if (!phoneDropdown.contains(e.target)) {
        phoneDropdown.classList.remove("active");
      }
    });
  }
});