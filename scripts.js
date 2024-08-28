document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slideshow img");
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }

  window.changeSlide = function (direction) {
    if (direction === 1) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  setInterval(nextSlide, 3000);
  showSlide(currentSlide);
  const mintForm = document.getElementById("mint-form");
  if (mintForm) {
    mintForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Your NFT has been minted!");
      mintForm.reset();
    });
  }

  const loginForm = document.getElementById("login-form");
  const mintSection = document.getElementById("mint-section");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "youssef" && password === "You26170725@@") {
      alert("Login successful!");
      mintSection.style.display = "block";
      loginForm.style.display = "none";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
});
