
  // SLIDER SCRIPT (already present)
  const slider = document.getElementById("slider");
  const slides = slider.querySelector(".slides");
  const totalSlides = slides.children.length;
  const dotsContainer = document.getElementById("dots");

  let currentIndex = 0;
  let interval = setInterval(nextSlide, 1500);

  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
  }

  const updateSlider = () => {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    document.querySelectorAll(".dot").forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  };

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
  }

  function goToSlide(index) {
    currentIndex = index;
    updateSlider();
    resetInterval();
  }

  function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextSlide, 1500);
  }

  slider.addEventListener("mouseenter", () => clearInterval(interval));
  slider.addEventListener("mouseleave", () => interval = setInterval(nextSlide, 1500));

  updateSlider();

  // TOGGLE MOBILE MENU
  function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  const menuToggle = document.getElementById("menuToggle");

  navLinks.classList.toggle("show");

  // Toggle icon
  if (navLinks.classList.contains("show")) {
    menuToggle.textContent = "✖";
  } else {
    menuToggle.textContent = "☰";
  }
}

