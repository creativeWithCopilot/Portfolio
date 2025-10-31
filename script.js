// Toggle mobile nav
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav-menu").classList.toggle("show");
});

// Filter projects
function filterProjects(category) {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach(card => {
    if (category === "all" || card.classList.contains(category)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Lightbox
function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = img.src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// Form validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  const feedback = document.getElementById("form-feedback");

  if (!name || !email || !message) {
    feedback.textContent = "Please fill in all fields.";
    feedback.style.color = "red";
  } else if (!email.includes("@")) {
    feedback.textContent = "Please enter a valid email.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Message sent successfully!";
    feedback.style.color = "green";
    this.reset();
  }
});

// Back to top button
window.addEventListener("scroll", () => {
  const backToTop = document.getElementById("back-to-top");
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

