document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  // Form submission handler
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous status
    formStatus.innerHTML = "";

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation
    if (!name || !email || !message) {
      formStatus.innerHTML = "Please fill out all fields.";
      formStatus.classList.add("text-red-500");
      return;
    }

    // Prepare template parameters
    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    // Send email via EmailJS
    emailjs.send("service_8knacbe", "template_1t3whlg", templateParams)
      .then(function () {
        formStatus.innerHTML = "Message sent successfully!";
        formStatus.classList.add("text-green-500");
        form.reset(); // Reset form fields
      })
      .catch(function (error) {
        formStatus.innerHTML = "There was an error sending the message. Please try again later.";
        formStatus.classList.add("text-red-500");
        console.error("EmailJS error:", error);
      });
  });

  // Smooth scroll functionality
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: "smooth"
      });
    });
  });

  // Burger menu toggle
  const burgerIcon = document.getElementById("burger-icon");
  const navMenu = document.getElementById("nav-menu");
  burgerIcon.addEventListener("click", function () {
    navMenu.classList.toggle("hidden");
  });

  // Profile image effects
  const image = document.getElementById("profile-image");
  image.addEventListener("mouseenter", function () {
    image.style.transform = "scale(1.1)";
    image.style.transition = "transform 0.3s ease-in-out";
  });
  image.addEventListener("mouseleave", function () {
    image.style.transform = "scale(1)";
  });
  image.addEventListener("click", function () {
    image.style.transform = "scale(1.3)";
    image.style.transition = "transform 0.2s ease";
  });

  // CV Download functionality
  document.getElementById("download-cv").addEventListener("click", function () {
    const cvFilePath = "youssef.pdf";
    const a = document.createElement("a");
    a.href = cvFilePath;
    a.download = "youssef.pdf";
    a.click();
  });
});
