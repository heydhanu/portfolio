// 1. Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
menuBtn.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", isOpen);
});
navLinks.addEventListener("click", function () {
  navLinks.classList.remove("open"); // close menu after choosing a link
});

// 2. Contact form validation
const form = document.getElementById("form");
const status = document.getElementById("status");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  if (name === "" || email === "" || message === "") {
    status.textContent = "Please fill in all fields.";
    status.className = "error";
  } else if (!email.includes("@")) {
    status.textContent = "Please enter a valid email address.";
    status.className = "error";
  } else {
    status.textContent = "Thank you, " + name + ". Your message has been received.";
    status.className = "success";
    form.reset();
  }
});

// 3. Back-to-top button
const topBtn = document.getElementById("top-btn");
window.addEventListener("scroll", function () {
  topBtn.style.display = window.scrollY > 400 ? "block" : "none";
});
topBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 4. Highlight the nav link for the section on screen
const sections = document.querySelectorAll("main section");
const links = document.querySelectorAll("#nav-links a");
window.addEventListener("scroll", function () {
  let current = "home";
  sections.forEach(function (section) {
    if (window.scrollY >= section.offsetTop - 120) current = section.id;
  });
  links.forEach(function (link) {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
});

// 5. Copy email button
const copyBtn = document.getElementById("copy-btn");
copyBtn.addEventListener("click", function () {
  const email = document.getElementById("email-link").textContent;
  navigator.clipboard.writeText(email).then(function () {
    copyBtn.textContent = "Copied!";
    setTimeout(function () { copyBtn.textContent = "Copy email"; }, 2000);
  });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
